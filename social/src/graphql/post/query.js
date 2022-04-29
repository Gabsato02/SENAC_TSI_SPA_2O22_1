import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query MyQuery {
    post(order_by: { created_at: desc }) {
      id
      image
      likes
      text
      user {
        id
        image
        name
      }
    }
  }
`;
