import React from 'react'
import styled from 'styled-components'


const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`

const ListGroupContainer = props => {
  const {
    nativeName,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
  } = props
  return (
    <ListGroup>
      <List>
        <ListItem>
          <b>Native Name:</b> {nativeName}
        </ListItem>
        <ListItem>
          <b>Population</b> {population}
        </ListItem>
        <ListItem>
          <b>Region:</b> {region}
        </ListItem>
        <ListItem>
          <b>Sub Region:</b> {subregion}
        </ListItem>
        <ListItem>
          <b>Capital:</b> {capital}
        </ListItem>
      </List>
      <List>
        <ListItem>
          <b>Top Level Domain</b>{' '}
          {topLevelDomain.map(d => (
            <span key={d}>{d}</span>
          ))}
        </ListItem>
        <ListItem>
          <b>Currency</b>{' '}
          {currencies.map(c => (
            <span key={c.code}>{c.name} </span>
          ))}
        </ListItem>
        <ListItem>
          <b>Top Level Domain</b>{' '}
          {languages.map(l => (
            <span key={l.name}>{l.name}</span>
          ))}
        </ListItem>
      </List>
    </ListGroup>
  )
}

export default ListGroupContainer
