import gql from 'graphql-tag'

const GET_CURRENT_USER = gql`
{
    currentUser {
        firstname
        lastname
    }
}
`

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!,
    $username: String!,
    $password: String!
  ) {
    register(input: {
      email: $email
      username: $username,
      password: $password
    }
    ) {
      user {
        username
        email
      }
    }
  }
`;

const LOGIN_USER = gql`
  mutation LoginUser(
    $username: String!, 
    $password: String!
    ) {
    login(input: {
      identifier: $username, 
      password: $password
    }
    ) {
      jwt
    }
  }
`

export {
  GET_CURRENT_USER,
  REGISTER_USER,
  LOGIN_USER
}