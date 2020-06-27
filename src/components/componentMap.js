import Navigation from './Navigation'
import AppBanner from './AppBanner'

const components = {
  Navigation,
  AppBanner
}

export function getComponent(componentName){
  return components[componentName];
}