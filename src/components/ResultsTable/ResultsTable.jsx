import './ResultsTable.css';
import MovieRow from './MovieRow/MovieRow';
import Message from '../Message/Message';

const ResultsTable = ({ movies }) => {
  if (!movies)
    return (
      <Message messageText="Type in the search bar to search for movies." />
    );
  return movies?.length > 0 ? (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Release Date</th>
        <th>Popularity</th>
        <th>Vote Average</th>
        <th>Vote Count</th>
        <th>Original Language</th>
      </tr>
      {movies.map((movie) => {
        return <MovieRow movieMetaData={movie} />;
      })}
    </table>
  ) : (
    <Message messageText="No results found. Try another search." />
  );
};

export default ResultsTable;
