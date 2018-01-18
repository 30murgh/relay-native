import {Footer, FooterTab, Button, Icon, Text} from 'native-base'
import React, {Component} from 'react'

class Tabbar extends Component<any, object> {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical={true}
            active={this.props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate('Events')}>
            <Icon name="bowtie"/>
            <Text>Events</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

export default Tabbar