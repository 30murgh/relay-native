import * as reactNavigation from 'react-navigation'

declare module 'react-navigation' {
  interface DrawerViewConfig {
    drawerOpenRoute?: string
    drawerCloseRoute?: string
    drawerToggleRoute?: string
  }
}