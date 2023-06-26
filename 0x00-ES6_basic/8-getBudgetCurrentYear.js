#!/usr/bin/env node

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
