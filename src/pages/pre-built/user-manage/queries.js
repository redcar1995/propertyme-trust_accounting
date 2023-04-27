import gql from 'graphql-tag'

const GET_ME = gql`
query User {
  me {
    id
    username
    email
  }
}
`;

const GET_SELF = gql`
query User {
  self {
    id
    email
    username
    account {
      id
      personal {
        kyc {
          full_name
          date_of_birth
          contact {
            phone_number
            physical_address
          }
        }
        alias
        avatar {
          url
        }
      }
      wallet {
        account_id
      }
      localisation {
        date_format
        time_zone
        language
      }
      notification {
        unusual_activity
        new_browser_login
        offers
        updates
        tips
      }
      security {
        save_logs
        use_two_factor
      }
    }
  }
}
`;

const UPDATE_CURRENT_USER = gql`
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

export {
  GET_ME,
  GET_SELF,
  UPDATE_CURRENT_USER
}