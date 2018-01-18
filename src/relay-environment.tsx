import {
  CacheConfig,
  ConcreteBatch,
  Environment,
  Network,
  RecordSource,
  Store,
  UploadableMap,
  Variables,
} from 'relay-runtime'
import Expo from 'expo'
import {USER_AUTH_TOKEN} from 'src/constants'
import Env from 'src/env.json'


function fetchQuery(operation: ConcreteBatch,
                    variables: Variables,
                    cacheConfig: CacheConfig,
                    uploadables?: UploadableMap) {
  return Expo.SecureStore.getItemAsync(USER_AUTH_TOKEN).then(token => {
    const graphqlURL = token == null ? Env.graphqlURL : Env.privateGraphqlURL
    return fetch(Env.baseURL + graphqlURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json()
    }).then((json) => {
      // https://github.com/facebook/relay/issues/1816
      if (operation.query.operation === 'mutation' && json.errors) {
        return Promise.reject(json.errors)
      }

      return Promise.resolve(json)
    })
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

const env = new Environment({
  network,
  store,
})

export default env