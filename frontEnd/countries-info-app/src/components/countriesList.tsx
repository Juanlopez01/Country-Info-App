import Link from "next/link"

interface Country {
    countryCode: string,
    name: string,
}
type Props = {
    list: [Country],
}
const URL = process.env.BASE_URL
const CountriesList = ({list}: Props) => {
    return <ul className="bg-cyan-900 w-full h-[60vh] overflow-y-auto text-center rounded-md overscroll-contain">
                {list.map((country : Country) => {
                    return <Link key={country.countryCode} href={`${URL}${country.name}/${country.countryCode}`} ><li  className="hover:bg-cyan-950 active:bg-cyan-950 py-1 text-lg">{country.name}</li></Link>
                })}
            </ul>
}

export default CountriesList