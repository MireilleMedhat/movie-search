import { useEffect, useState } from 'react';
import './ResultsTable.css';
import axios from 'axios';

const ResultsTable = () => {
  const [searchText, setSearchText] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=d87ddb182bccb4667d3e292553ab2caa&query=abc'
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setData(JSON.stringify(response));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div className="tableContainer">
      {data}
      {/* <table>
        <th>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
        </th>
        <tr>
          <td>42</td>
          <td>243</td>
          <td>42</td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr>
      </table> */}
    </div>
  );
};

export default ResultsTable;
