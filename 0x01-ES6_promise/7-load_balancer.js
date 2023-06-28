#!/usr/bin/env

/*
 * Race two promises
*/

export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload])
    .then((downloadData) => {
        return downloadData
    })
}