import { getAllCountriesURL } from './config.js'

export const getAllCountries = async () => {
  const allCountries = await fetch(getAllCountriesURL) // fetch all countries
  const allCountriesJSON = await allCountries.json() // convert response into JSON
  return allCountriesJSON
}
