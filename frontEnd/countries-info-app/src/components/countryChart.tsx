'use client'
import { formattedPopulation, Ipopulation } from '@/utils/formattedPopulation'
import { LineChart } from '@mui/x-charts/LineChart'
import React from 'react'

type Props = { 
    populationData: Ipopulation[]
}

const CountryChart = ({populationData}: Props) => {
    const {yearArray, valueArray} = formattedPopulation(populationData)
    
  return (
    <div className='w-full'>
        <LineChart
            xAxis={[{data: yearArray.slice(8)}]}
            series={[{ data: valueArray.slice(8)}]}
            width={400}
            height={300}
        />
    </div>
    
  )
}

export default CountryChart