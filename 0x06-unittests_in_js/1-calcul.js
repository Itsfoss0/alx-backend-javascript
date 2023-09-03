#!/usr/bin/env node

function calculateNumber(type, numA, numB){
    try{
        const numA = Math.round(numA)
        const numB = Math.round(numB)
        if (type === "ADD"){
            return (numA + numB)
        }else if (type === "DIVIDE"){
            return (numB === 0) ? "Error" : (numA / numB)
        }else if (type === "SUBTRACT"){
            return (numA - numB)
        }
    } catch(err){
        return (err)
    }
    
}

module.exports = calculateNumber