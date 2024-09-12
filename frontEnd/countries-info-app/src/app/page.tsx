import getCountries from "@/utils/getCountries";
import CountriesList from "@/components/countriesList";

export default async function Home() {
  const listCountries = await getCountries()
  return (
    <div className="flex flex-col items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold uppercase text-cyan-950" >Countries fast list</h1>
          <h2 className="text-lg md:text-xl font-semibold text-cyan-950 text-end" >By Juan Lopez</h2>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[50vw]">
          <h4 className="text-lg md:text-xl font-semibold text-cyan-950">Choose your favourite country 👇</h4>
          <CountriesList list={listCountries} />
        </div>
     </main> 
    </div>
  );
}
