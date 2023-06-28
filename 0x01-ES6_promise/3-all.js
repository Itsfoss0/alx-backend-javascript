#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResp, userResp]) => {
      console.log(`${photoResp.body} ${userResp.firstName} ${userResp.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
