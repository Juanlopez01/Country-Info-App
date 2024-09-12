# Country Info App

This project is an application that allows users to consult information about countries, retrieved from an API. Users can select a country and be redirected to a page with detailed information, including population over the years, the country's flag, and its neighboring countries.

## Features

- **Country list**: Displays a list of all available countries.
- **Country selection**: Upon selecting a country, the user is redirected to a page with detailed information.
- **Country information**: Population over the years, flag image, and neighboring countries.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation and configuration

This project is divided into two folders: `backend` and `frontend`. To run the app properly, follow the instructions below for both folders.

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend

   ```

2. Install the necessary dependencies:
   npm install

3. Create a .env file in the backend folder with the following environment variables:
   GET_ALL_COUNTRIES_URL = 'https://date.nager.at/api/v3/AvailableCountries'
   GET_COUNTRY_INFO_URL= "https://date.nager.at/api/v3/CountryInfo/"
   GET_COUNTRY_POPULATION_URL = "https://countriesnow.space/api/v0.1/countries/population"
   GET_COUNTRY_FLAG_URL = "https://countriesnow.space/api/v0.1/countries/flag/images"

4. Start the development server:
   npm run dev

### Frontend

1. Navigate to the frontend folder:
   cd frontend
   cd countries-info-app

2. Install the necessary dependencies:
   npm install

3. Create a .env file in the frontend folder with the following environment variables:
   GET_COUNTRIES = http://localhost:3000/getAllCountries
   GET_COUNTRY_DETAILS= http://localhost:3000/getCountry
   BASE_URL=http://localhost:3001/

4. Start the development server:
   npm run dev

### Running both applications

To run both the backend and frontend simultaneously, open two separate terminal windows:

1. In the first terminal, navigate to the backend directory and run:
   npm run dev

2. In the second terminal, navigate to the frontend directory and run:
   npm run dev

### Technologies used

    -Frontend: React
    -Backend: Node.js, Express
