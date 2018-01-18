import React, {Component} from 'react'
import {Text} from 'react-native'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import {NavigationScreenProp, NavigationAction} from 'react-navigation'
import AgencyList from 'src/components/agency/AgencyList'
import environment from 'src/relay-environment'

interface IProps {
  navigation: NavigationScreenProp<any, NavigationAction>
}


const AgencyListPageQuery = graphql`
    query AgencyListPageQuery {
        allAgencies {
            ...AgencyList_allAgencies
        }
    }
`

class AgencyListPage extends Component<IProps, object> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AgencyListPageQuery}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>{error.message}</Text>
          } else if (props) {
            return <AgencyList allAgencies={props.allAgencies}/>
          }
          return <Text>Loading</Text>
        }}
      />
    )
  }
}

export default AgencyListPage