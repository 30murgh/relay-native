import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from 'src/relay-environment'

const mutation = graphql`
    mutation LoginUserMutation($loginUserInput: LoginUserInput!) {
        loginUser(userData: $loginUserInput) {
            token
        }
    }
`

export default (phoneNumber: string,
                otp: string,
                callback: (token: string) => void,
                onError: (err: Error | undefined) => void) => {
  const variables = {
    loginUserInput: {
      phoneNumber,
      otp,
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response.loginUser.token)
      },
      onError: err => onError(err)
    },
  )
}