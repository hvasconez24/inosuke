//Import graphql
import gql from 'graphql-tag';

//query GET_ME
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image  
                title
                description
                link
            }
        }
    }
`;