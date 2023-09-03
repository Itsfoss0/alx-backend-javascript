#!/usr/bin/env node

function calculateNumber(type, numA, numB){
    try{

        if (type === "ADD"){
            return (Math.round(numA) + Math.round(numB))
        }else if (type === "DIVIDE"){
            return (Math.round(numB === 0)) ? "Error" : (Math.round(numA) / Math.round(numB))
        }else if (type === "SUBTRACT"){
            return (Math.round(numA) - Math.round(numB))
        }
    } catch(err){
        return (err)
    }
    
}

module.exports = calculateNumber