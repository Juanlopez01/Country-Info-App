export default async function getCountryDetails ({name, code} : {name: string, code: string}){
    const getCountryDetailsURL = process.env.GET_COUNTRY_DETAILS
    
    const countryDetails = await fetch(`${getCountryDetailsURL}?code=${code}&name=${name}`).then((countryDetail) => countryDetail.json().then((countryDetailJSON)=> countryDetailJSON))
    return countryDetails
}