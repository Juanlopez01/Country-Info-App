export default async function getCountries(){
    const countriesURL = process.env.GET_COUNTRIES as string;
    const listCountries = await fetch(countriesURL);
    const listCountriesJson =listCountries.json();
    return listCountriesJson
}