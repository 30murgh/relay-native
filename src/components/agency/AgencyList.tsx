import React, {Component} from 'react'
import {View} from 'react-native'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import Agency, {IAgency} from 'src/components/agency/Agency'

interface IProps {
  allAgencies: {
    edges: Array<{ node: IAgency }>
  }
}

class AgencyList extends Component<IProps, object> {
  render() {
    return (
      <View>
        {this.props.allAgencies.edges.map(({node}) =>
          <Agency key={node.__id} agency={node}/>
        )}
      </View>
    )
  }
}

export default createFragmentContainer(AgencyList, graphql`
    fragment AgencyList_allAgencies on AgencyNodeConnection {
        edges {
            node {
                ...Agency_agency
            }
        }
    }
`)