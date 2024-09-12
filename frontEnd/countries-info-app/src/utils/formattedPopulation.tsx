export interface Ipopulation{
    year:string,
    value: string
}

export const formattedPopulation = (populationArray: Ipopulation[]) => {
    const yearArray = populationArray.map((population : Ipopulation) => population.year);
    const valueArray = populationArray.map((population : Ipopulation) => parseInt(population.value));
    return {
        yearArray, 
        valueArray
    }
}