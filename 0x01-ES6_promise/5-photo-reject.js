#!/usr/bin/env node

/*
 * some promises are meant to be rejected
 * Lets break our promise here shall we?
*/

export default function uploadPhoto(filename) {
    return Promise.reject( new Error(`${filename} cannot be processed`))
}