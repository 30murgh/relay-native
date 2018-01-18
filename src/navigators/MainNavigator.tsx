import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import Sidebar from 'src/components/common/Sidebar'
import HomeNavigator from 'src/navigators/HomeNavigator'
import {resetRouterTo} from 'src/navigators/utils'

const MainNavigator = DrawerNavigator(
  {
    Home: {screen: HomeNavigator},
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <Sidebar {...props}/>
  },
)

export const resetMainStack = (routeName: string) => resetRouterTo(false, routeName)

export default MainNavigator