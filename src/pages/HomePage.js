import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { ALL_COUNTRIES } from '../API/'

import Card from '../components/Card.js'
import List from '../components/List'
import { Controls } from '../components/Controls'

const HomePage = ({ countries, setCountries }) => {
  const { push } = useHistory()

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  return (
    <>
      {' '}
      <Controls />
      <List>
        {countries.map(c => {
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
