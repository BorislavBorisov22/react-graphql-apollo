import gql from 'graphql-tag';

const fetchSongDetailsQuery = gql`
    query FetchSong($id: ID!){
        song(id: $id) {
            title,
            lyrics {
                content,
                id,
                likes
            }
        }
    }
`;

export default fetchSongDetailsQuery;