#!/usr/bin/env node

/*
 * full user signup functionality
*/

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firsName, lastName, fileName) {
  const sUPromise = signUpUser(firsName, lastName);
  const uPPromise = uploadPhoto(fileName);
  return Promise.allSettled([sUPromise, uPPromise])
    .then((responses) => {
      const returnArray = [];
      for (const response of responses) {
        if (response.status === 'fulfilled') {
          returnArray.push({ status: response.status, value: response.value });
        } else {
          returnArray.push({ status: response.status, value: response.reason });
        }
      }
      return returnArray;
    });
}
