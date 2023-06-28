#!/usr/bin/env node

/*
 * promises should be fullfilled
 * or rejected if we have a change of heart
*/

export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
