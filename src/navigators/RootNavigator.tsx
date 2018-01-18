import React from 'react'
import {StackNavigator} from 'react-navigation'
import AuthNavigator from 'src/navigators/AuthNavigator'
import MainNavigator from 'src/navigators/MainNavigator'
import {resetRouterTo} from 'src/navigators/utils'

// More Info:
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-navigation/react-navigation-tests.tsx

const createRootNavigator = (initialRouteName: string) => {
  return StackNavigator(
    {
      Auth: {screen: AuthNavigator},
      Main: {screen: MainNavigator}
    },
    {
      initialRouteName,
      headerMode: 'none'
    },
  )
}

export const resetRootStack = (routeName: string) => resetRouterTo(true, routeName)

export default createRootNavigator