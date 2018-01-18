import Expo from 'expo'
import {Root} from 'native-base'
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {graphql, QueryRenderer} from 'react-relay'
import {USER_AUTH_TOKEN} from 'src/constants'
import createRootNavigator from 'src/navigators/RootNavigator'
import environment from 'src/relay-environment'

const AppQuery = graphql`
    query AppQuery {
        isLoggedIn
    }
`

class App extends Component<any, object> {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    })
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
                <Text>{error.message}</Text>
              </View>
            )
          } else if (props) {
            if (props.isLoggedIn) {
              const RootComponent = createRootNavigator('Main')
              return (<Root><RootComponent/></Root>)
            }
            Expo.SecureStore.deleteItemAsync(USER_AUTH_TOKEN).then(() => {
              const RootComponent = createRootNavigator('Auth')
              return (<Root><RootComponent/></Root>)
            })
          }
          return <Expo.AppLoading startAsync={null} onFinish={null}/>
        }}
      />
    )
  }
}

export default App
