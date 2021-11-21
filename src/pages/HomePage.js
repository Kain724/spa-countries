import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { ALL_COUNTRIES } from '../API/'

import Card from '../components/Card.js'
import List from '../components/List'
import { Controls } from '../components/Controls'

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const { push } = useHistory()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter(c => c.region.includes(region))
    }

    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }
  }, [])

  useEffect(() => {
    handleSearch()
  }, [countries])

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map(c => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              { title: 'Population', description: c.population.toLocaleString() },
              { title: 'Region', description: c.region },
              { title: 'Capital', description: c.capital },
            ],
          }
          return (
            <Card
              onClick={() => push(`/country/${c.name}`)}
              key={c.name}
              {...countryInfo}
            />
          )
        })}
      </List>
    </>
  )
}

export default HomePage
