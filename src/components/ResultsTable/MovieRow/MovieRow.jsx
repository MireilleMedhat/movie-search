import { useEffect, useState } from 'react';

const MovieRow = ({ movieMetaData }) => {
  const [searchText, setSearchText] = useState();
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    de,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movieMetaData;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      {/* <td>{overview}</td> */}
      <td>{release_date}</td>
      <td>{popularity}</td>
      <td>{vote_average}</td>
      <td>{vote_count}</td>
      <td>{original_language}</td>
    </tr>
  );
};

export default MovieRow;
