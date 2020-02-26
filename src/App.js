import React, { useEffect, useState } from 'react'
import { getBreweries } from './services'
import useBreweries from './useBreweries'

function App() {
  const { breweries, isLoading, showNextPage, showPrevPage } = useBreweries()
  return (
    <div>
      <button disabled={isLoading} onClick={showPrevPage}>
        Prev
      </button>
      <button disabled={isLoading} onClick={showNextPage}>
        Next
      </button>
      {breweries.map(brewery => (
        <section>{brewery.name}</section>
      ))}
    </div>
  )
}

export default App
