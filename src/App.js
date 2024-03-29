import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import Header from './components/Header'
import { Main } from './components/Main'
import Details from './pages/Details'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path='/country/:name' component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  )
}

export default App
