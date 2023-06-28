#!/usr/bin/env node

/*
 * full user signup functionality
*/
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sUPromise = signUpUser(firstName, lastName);
  const uPPromise = uploadPhoto(fileName);

  return Promise.allSettled([sUPromise, uPPromise]).then((responses) => {
    const returnValue = [];
    responses.forEach((response) => {
      if (response.status !== 'fulfilled') {
        returnValue.push({ status: response.status, value: `${response.reason}` });
      } else {
        returnValue.push({ status: response.status, value: response.value });
      }
    });
    return returnValue;
  });
}
