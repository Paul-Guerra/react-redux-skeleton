import * as React from 'react';
import click from '../actions/fetch.actions';

export function FetchResults(results) {
  return results.map((result) => { return (<li key={result.id}>{result.description}</li>); });
}


export default function ({ status, results, onFetchClick }) {
  return (
    <div>
      <div>{status}</div>
      <button onClick={() => onFetchClick('http://localhost:3000/api/test.json')} className="fetch-request" >Fetch something</button>
      <ul>
        {FetchResults(results)}
      </ul>
    </div>
  );
}
