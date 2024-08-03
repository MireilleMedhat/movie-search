import { useEffect, useState } from 'react';
import './ResultsTable.css';
import axios from 'axios';
import useSearch from '../../hooks/useSearch';
import MovieRow from './MovieRow/MovieRow';

const ResultsTable = ({ movies }) => {
  console.log('movies', movies);
  return (
    <div className="tableContainer">
      {movies?.length > 0 ? (
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            {/* <th>Overview</th> */}
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
        <div>Type in search bar to search for movies.</div>
      )}
    </div>
  );
};

export default ResultsTable;
