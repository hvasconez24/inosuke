//import graphql
import gql from 'graphql-tag';

// mutation set up using apollo
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//mutation ADD_USER
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//mutation SAVE_BOOK
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
        _id
        username
        email
        savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;


//mutation REMOVE_BOOK
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
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