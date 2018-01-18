import React from 'react'
import {StackNavigator} from 'react-navigation'
import JoinPage from 'src/components/user/JoinPage'
import LoginPage from 'src/components/user/LoginPage'
import {resetRouterTo} from 'src/navigators/utils'

const AuthNavigator = StackNavigator(
  {
    Join: {screen: JoinPage},
    Login: {screen: LoginPage},
  },
  {
    initialRouteName: 'Join',
  },
)

export const resetAuthStack = (routeName: string) => resetRouterTo(false, routeName)

export default AuthNavigator