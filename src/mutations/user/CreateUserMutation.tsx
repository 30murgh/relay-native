import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from 'src/relay-environment'

const mutation = graphql`
    mutation CreateUserMutation($createUserInput: CreateUserInput!) {
        createUser(userData: $createUserInput) {
            user {
                otpExpireDate
            }
        }
    }
`

export default (phoneNumber: string, callback: (otpExpireDate: string) => void) => {
  const variables = {
    createUserInput: {
      phoneNumber,
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response.createUser.user.otpExpireDate)
      },
      onError: err => console.error(err),
    },
  )
}