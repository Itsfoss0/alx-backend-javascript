#!/usr/bin/env node

/*
 * try and catch this throw
*/

export default function guardrail(mathFunction){
    const queue = []
    try{
        queue.push(mathFunction())
    } catch(err){
        queue.push(`Error: ${err.message}`)
    }finally{
        queue.push('Guardrail was processed')
    }
    return queue
}