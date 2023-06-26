#!/usr/bin/env node
export default function returnHowManyArguments(...params) {
  return params.length;
}

console.log(returnHowManyArguments('John', 'Doe'));
