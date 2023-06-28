#!/usr/bin/env node

/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */

/*
 * Always keep every promises you make
 * And make only promises you can keep
 * even if that means making empty promises
*/
export default function getResponseFromAPI() {
  return new Promise((res, rej) => {
    res('Hi Mom');
    rej('Rejected');
  });
}
