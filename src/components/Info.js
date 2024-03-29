import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { filterByCode } from '../API'
import ListGroupContainer from './ListGroupContainer.js'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`

export const Info = props => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props

  const [neighbors, setNeighbors] = useState([])

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map(c => c.name)))
  }, [borders])

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <>
        <InfoTitle>{name}</InfoTitle>
        <ListGroupContainer
          data={
            (nativeName,
            nativeName,
            capital,
            population,
            region,
            subregion,
            topLevelDomain,
            currencies,
            languages)
          }
        />

        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map(b => (
                <Tag key={b} onClick={() => push(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </>
    </Wrapper>
  )
}
