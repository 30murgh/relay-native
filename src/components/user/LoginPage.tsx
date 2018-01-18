import React, {Component} from 'react'
import {TextInput, Button, View} from 'react-native'
import {NavigationAction, NavigationScreenProp} from 'react-navigation'
import Expo from 'expo'
import {USER_AUTH_TOKEN, USER_PHONE_NUMBER} from 'src/constants'
import LoginUserMutation from 'src/mutations/user/LoginUserMutation'
import {resetRootStack} from 'src/navigators/RootNavigator'

interface IProps {
  navigation: NavigationScreenProp<any, NavigationAction>
}

class LoginPage extends Component<IProps, object> {
  state = {
    otp: '',
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.otp}
          onChangeText={(text) => this.setState({otp: text})}
          placeholder='Your OTP'
        />
        <Button title={'Submit'} onPress={() => this.confirm()}/>
      </View>
    )
  }

  private confirm = () => {
    const {otp} = this.state
    Expo.SecureStore.getItemAsync(USER_PHONE_NUMBER).then(phoneNumber => {
      if (phoneNumber != null) {
        LoginUserMutation(phoneNumber, otp, async (token) => {
          await this.saveUserData(token)
          this.props.navigation.dispatch(resetRootStack('Main'))
        }, (err) => {
          this.props.navigation.goBack()
        })
      } else {
        this.props.navigation.goBack()
      }
    })
  }

  private saveUserData = async (token: string) => {
    await Expo.SecureStore.setItemAsync(USER_AUTH_TOKEN, token)
  }
}

export default LoginPage