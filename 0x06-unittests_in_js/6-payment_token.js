#!/usr/bin/env node

/* eslint-disable */


module.exports = {
    getPaymentTokenFromAPI: function(success){
        if (success){
            return new Promise((resolve, reject) => {
                resolve({data: 'Successful response from the API' })
            })
        }
    }
}