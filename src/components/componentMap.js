import Navigation from "./Navigation/Navigation";
import NavigationLinks from "./Navigation/NavigationLinks";
import AppBanner from "./AppBanner";
import Drawer from "./Chat/Drawer/Drawer";
import Messages from "./Chat/Messages/Messages";
import User from "./Chat/global/User";

const components = {
  Navigation,
  NavigationLinks,
  AppBanner,
  Drawer,
  Messages,
  User
};

export function getComponent(componentName) {
  return components[componentName];
}
