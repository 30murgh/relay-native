import React from 'react'
import {TabNavigator} from 'react-navigation'
import AgencyListPage from 'src/components/agency/AgencyListPage'
import Tabbar from 'src/components/common/Tabbar'

const HomeNavigator = TabNavigator(
  {
    Events: {screen: AgencyListPage},
  },
  {
    initialRouteName: 'Events',
    tabBarPosition: 'bottom',
    tabBarComponent: Tabbar
  },
)

export default HomeNavigator