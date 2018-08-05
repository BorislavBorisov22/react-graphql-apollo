import gql from 'graphql-tag';

const deleteSongMutation = gql`
    mutation DeleteSong($id: ID!) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default deleteSongMutation;