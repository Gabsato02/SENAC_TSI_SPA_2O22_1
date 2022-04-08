import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation ADD_POST($image: String!, $text: String!, $user_id: uuid!) {
    insert_post(objects: { image: $image, text: $text, user_id: $user_id }) {
      affected_rows
    }
  }
`;
