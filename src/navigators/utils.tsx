import {NavigationActions, NavigationResetActionPayload} from 'react-navigation'


export const resetRouterTo = (withNullKey: boolean, routeName: string) => {
  const options: NavigationResetActionPayload = {
    index: 0,
    actions: [
      NavigationActions.navigate({routeName})
    ]
  }
  if (withNullKey) { // TODO: remove later https://github.com/react-navigation/react-navigation/pull/1384
    options.key = null
  }
  return NavigationActions.reset(options)
}