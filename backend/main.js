import express from 'express' // type modules in packaje.json, not commonjs
import { PORT } from './utils/config.js' // import number of port from config.js
import { getAllCountries } from './utils/getAllCountries.js'
import dotenv from 'dotenv'
import { getCountry } from './utils/getCountry.js'
dotenv.config()

const app = express()
app.use(express.json()) // middleware to transform request body into JSON

app.get('/getAllCountries', async (req, res) => {
  const allCountries = await getAllCountries()
  res.json(allCountries)
})

app.get('/getCountry', async (req, res) => {
  const { name, code } = req.query
  const countryDetails = await getCountry({ name, code })
  res.json(countryDetails)
})

app.listen(PORT, () => { console.log('listening on port 3000') })
