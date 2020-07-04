import Navigation from "./Navigation/Navigation";
import NavigationLinks from "./Navigation/NavigationLinks";
import AppBanner from "./Navigation/AppBanner";
import Drawer from "./Chat/Drawer/Drawer";
import Messages from "./Chat/Messages/Messages";
import HappyMessaging from "./Chat/Messages/HappyMessaging";
import SingleMsg from "./Chat/Messages/SingleMsg";
import User from "./Chat/Drawer/User/User";
import Contact from "./Chat/Drawer/ContactList/Contact";
import ContactList from "./Chat/Drawer/ContactList/ContactList";

const components = {
  Navigation,
  NavigationLinks,
  AppBanner,
  Drawer,
  Messages,
  HappyMessaging,
  SingleMsg,
  User,
  Contact,
  ContactList
};

export function getComponent(componentName) {
  return components[componentName];
}
