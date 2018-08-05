import gql from 'graphql-tag';

const likeLyricMutation = gql`
    mutation LikeLyric($id: ID!) {
        likeLyric(id: $id) {
            id,
            content,
            likes
        }
    }
`;

export default likeLyricMutation;