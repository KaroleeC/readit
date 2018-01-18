// dropdown of users liked subs

import React from 'react';

function Header(props) {
  return (
    <div>
      <select>
        <option value="Pop"> Popluar </option>
        <option value="All"> All </option>
        <option value="Random"> Random </option>
      </select>
      <h3>This is the header </h3>
      <ul>
        <li>Popluar</li>
        <li>All</li>
        <li>Random</li>
      </ul>
    </div>
  )
}

export default Header;
