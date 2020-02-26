import React, { useEffect, useState } from 'react'
import { getBreweries } from './services'

function App() {
  const [breweries, setBreweries] = useState([])
  const [pageOffset, setPageOffset] = useState(0)

  useEffect(() => {
    getBreweries(1).then(res => {
      setBreweries(res.data)
    })
  }, [])

  return (
    <div>
      {breweries.map(brewery => (
        <section>{brewery.name}</section>
      ))}
    </div>
  )
}

export default App
