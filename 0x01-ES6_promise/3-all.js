#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();
  Promise.all([photoPromise, userPromise])
    .then((resp) => {
      console.log(`${resp[0].body} ${resp[1].firstName} ${resp[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
