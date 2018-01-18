import Expo from 'expo'
import React, {Component} from 'react'
import {TextInput, Button, View} from 'react-native'
import {NavigationAction, NavigationScreenProp} from 'react-navigation'
import {USER_PHONE_NUMBER} from 'src/constants'
import CreateUserMutation from 'src/mutations/user/CreateUserMutation'

interface IProps {
  navigation: NavigationScreenProp<any, NavigationAction>
}

class JoinPage extends Component<IProps, object> {
  state = {
    phoneNumber: '',
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.phoneNumber}
          onChangeText={(text) => this.setState({phoneNumber: text})}
          placeholder='Your Phone Number'
        />
        <Button title={'Submit'} onPress={() => this.confirm()}/>
      </View>
    )
  }

  private confirm = () => {
    const {phoneNumber} = this.state
    CreateUserMutation(phoneNumber, async (otpExpireDate) => {
      await this.saveUserData(phoneNumber)
      this.props.navigation.navigate('Login', {otpExpireDate})
    })
  }

  private saveUserData = async (phoneNumber: string) => {
    await Expo.SecureStore.setItemAsync(USER_PHONE_NUMBER, phoneNumber)
  }
}

export default JoinPage