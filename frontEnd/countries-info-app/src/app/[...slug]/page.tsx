import CountryChart from "@/components/countryChart"
import getCountryDetails from "@/utils/getCountryDetails"
import Image from "next/image"
import Link from "next/link"
interface borderCountries {
    commonName: string,
	officialName: string,
	countryCode: string,
	region: string,
	borders: string | null | undefined, 
}
const URL = process.env.BASE_URL
export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const {borders, populationCounts, flag} = await getCountryDetails({name: slug[0], code: slug[1]})
    
    return <>
            <Link href={URL ?? ''} className="inline-block mx-8 my-8 bg-cyan-700 px-8 py-4 text-center rounded-lg">Go to List Page</Link>
            <div className="flex max-md:flex-col items-center gap-8 m-8 justify-center text-black">
                <div className="flex flex-col items-center md:gap-10">
                    <h1 className='text-3xl font-semibold uppercase'> {slug[0]} </h1>
                    <CountryChart populationData={populationCounts} />
                </div>
                <aside className="flex flex-col items-center bg-cyan-700 py-10 px-9 rounded-lg shadow-lg gap-4">
                    <h2 className="text-xl uppercase font-semibold">Flag</h2>
                    {flag ? <Image src={`${flag}`} alt={slug[0]} loading="lazy" width={250} height={250}/> : <></>}   
                    <h2 className="text-lg uppercase font-semibold">Bordering countries</h2>
                    <ul className="bg-cyan-900 text-white py-2 text-center w-full rounded-md">
                        {borders ? borders.map((country : borderCountries) => <Link key={country.countryCode} href={`${URL}${country.commonName}/${country.countryCode}`} ><li  className="hover:bg-cyan-950 active:bg-cyan-950">{country.commonName}</li></Link>) : <></>}
                    </ul>
                </aside>
            </div>
            </>
  }