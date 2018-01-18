import React, {Component} from 'react'
import {Text} from 'react-native'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

export interface IAgency {
  __id: string,
  id: string,
  name: string,
  url: string
}

interface IProps {
  agency: IAgency
}

class Agency extends Component<IProps, object> {
  render() {
    return (
      <Text>{this.props.agency.name} ({this.props.agency.url})</Text>
    )
  }
}

export default createFragmentContainer(Agency, graphql`
    fragment Agency_agency on AgencyNode {
        id
        name
        url
    }
`)