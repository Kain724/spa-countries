import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useHistory, useParams } from 'react-router'
import { searchByCountry } from '../API'
import { Info } from '../components/Info'

import MyButton from '../components/MyButton'

const Details = () => {
  const { name } = useParams()
  const { push, goBack } = useHistory()
  const [country, setCountry] = useState(null)


  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  return (
    <div>
      <MyButton onClick={goBack}>
        <IoArrowBack /> Back
      </MyButton>
      {country &&  <Info push={push} {...country} />}
    </div>
  )
}

export default Details
