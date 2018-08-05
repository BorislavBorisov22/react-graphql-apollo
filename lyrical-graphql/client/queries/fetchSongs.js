import gql from 'graphql-tag';

const fetchSongsQuery = gql`
    query {
        songs {
            title,
            id
        }
    }
`;

export default fetchSongsQuery;