import { useEffect, useState } from 'react';
import './ResultsTable.css';

const ResultsTable = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div className="tableContainer">
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
