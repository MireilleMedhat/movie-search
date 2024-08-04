// Other available props:
// adult, backdrop_path, genre_ids, de, original_title, overview, poster_path, video
const MovieRow = ({ movieMetaData }) => {
  const {
    id,
    original_language,
    popularity,
    release_date,
    title,
    vote_average,
    vote_count,
  } = movieMetaData;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{release_date}</td>
      <td>{popularity}</td>
      <td>{vote_average}</td>
      <td>{vote_count}</td>
      <td>{original_language}</td>
    </tr>
  );
};

export default MovieRow;
