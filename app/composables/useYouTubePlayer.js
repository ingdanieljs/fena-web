let apiPromise;

const loadApi = () => {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiPromise ??= new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.append(script);
  });
  return apiPromise;
};

export const useYouTubePlayer = (container, { videoId, title }) => {
  const muted = ref(true);
  const paused = ref(false);
  let player;
  let observer;
  const element = () => [container.value].flat()[0];

  const create = async () => {
    const YT = await loadApi();
    const target = document.createElement("div");
    element().append(target);
    player = new YT.Player(target, {
      host: "https://www.youtube-nocookie.com",
      videoId: toValue(videoId),
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event) => {
          event.target.getIframe().setAttribute("title", toValue(title));
          event.target.mute();
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) paused.value = false;
          if (event.data === YT.PlayerState.PAUSED) paused.value = true;
        },
      },
    });
  };

  const toggleSound = () => {
    if (!player?.unMute) return;
    if (player.isMuted()) {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      muted.value = false;
    } else {
      player.mute();
      muted.value = true;
    }
  };

  const togglePlay = () => {
    if (!player?.pauseVideo) return;
    if (paused.value) player.playVideo();
    else player.pauseVideo();
  };

  onMounted(() => {
    if (!element()) return;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        create();
      },
      { rootMargin: "200px" },
    );
    observer.observe(element());
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    player?.destroy?.();
  });

  return { muted, paused, toggleSound, togglePlay };
};
