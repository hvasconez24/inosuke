//import graphql
import gql from "graphql-tag";

//GET_ME (get the user data)
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;
