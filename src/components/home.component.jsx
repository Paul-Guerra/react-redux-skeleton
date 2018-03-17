import * as React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <h3>Welcome</h3>
      <ul>
        <li><Link to="/fetch">Fetch Page</Link></li>
      </ul>
    </div>
  );
}
