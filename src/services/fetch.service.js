import fetch from 'isomorphic-fetch';

export default (url) => {
    return fetch(url).then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
    }).catch((e) =>{
        console.log('[fetch error]')
    });
}