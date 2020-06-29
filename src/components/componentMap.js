import Navigation from "./Navigation/Navigation";
import NavigationLinks from "./Navigation/NavigationLinks";
import AppBanner from "./AppBanner";

const components = {
  Navigation,
  NavigationLinks,
  AppBanner,
};

export function getComponent(componentName) {
  return components[componentName];
}
