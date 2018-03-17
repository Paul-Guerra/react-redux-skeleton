import * as React from 'react';
import click from '../actions/fetch.actions';

export default function({status, results, onFetchClick}){
    console.log(results);
    return (
        <div>
            <div>{status}</div>
            <a onClick={() => onFetchClick('http://localhost:3000/api/test.json')} className="fetch-request" >Fetch something</a>
            <ul>
                {FetchResults(results)}
            </ul>
        </div>
    );
}

export function FetchResults(results) {
    return results.map((result) => {
        return (
            <li key={result.id}>{result.description}</li>
        )
    });
}
