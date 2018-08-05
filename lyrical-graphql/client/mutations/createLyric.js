import gql from 'graphql-tag';

const createLyricMutation = gql`
    mutation AddLyricToSong($songId: ID!, $content: String) {
        addLyricToSong(songId: $songId, content: $content) {
            id
            lyrics {
                id
                content
            }
        }
    }
`;

export default createLyricMutation;