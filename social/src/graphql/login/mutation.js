import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation ADD_USER($name: String!, $password: String!, $username: String!) {
    insert_user(
      objects: { name: $name, password: $password, username: $username }
    ) {
      returning {
        name
        username
        id
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation EDIT_USER($image: String, $name: String, $id: uuid) {
    update_user(
      where: { id: { _eq: $id } }
      _set: { name: $name, image: $image }
    ) {
      affected_rows
    }
  }
`;
