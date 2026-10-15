import menuItems from "~/constants/menu.js";

// Marca como activo el ítem del menú (o su padre) que coincide con la ruta actual.
export const useMenu = () => {
  const route = useRoute();

  const isActive = (item) => {
    if (item.to === "/") return route.path === "/";
    if (item.to && route.path.startsWith(item.to)) return true;
    return (item.children || []).some((child) => isActive(child));
  };

  return { menuItems, isActive };
};
