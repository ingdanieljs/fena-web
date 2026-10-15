import { defineStore } from "pinia";

// Estado de los paneles del layout: sidebar de info, menú móvil y chat.
export const useUiStore = defineStore("ui", {
  state: () => ({
    sidebarOpen: false,
    mobileNavOpen: false,
    chatOpen: false,
  }),
  actions: {
    openSidebar() {
      this.sidebarOpen = true;
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
    toggleChat(value = !this.chatOpen) {
      this.chatOpen = value;
    },
    closeAll() {
      this.sidebarOpen = false;
      this.mobileNavOpen = false;
      this.chatOpen = false;
    },
  },
});

