import { getCountryFlagURL, getCountryInfoURL, getCountryPopulationURL } from './config.js'

export const getCountry = async ({ name, code }) => {
  const borders = await fetch(`${getCountryInfoURL + code}`).then((country) => country.json().then((countryJSON) => countryJSON.borders
  ))
  const populationCounts = await fetch(getCountryPopulationURL, {
    method: 'POST',
    body: JSON.stringify({ country: name }),
    headers: { 'Content-Type': 'application/json' }
  }).then((populationCounts) => populationCounts.json().then((populationCountsJSON) => populationCountsJSON.data.populationCounts))

  const flag = await fetch(getCountryFlagURL, {
    method: 'POST',
    body: JSON.stringify({ iso2: code }),
    headers: { 'Content-Type': 'application/json' }
  }).then((countryFlag) => countryFlag.json().then((countryFlagJSON) => countryFlagJSON.data?.flag))

  return {
    borders,
    populationCounts,
    flag
  }
}
