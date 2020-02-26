import { useEffect, useState } from 'react'
import { getBreweries } from './services'
export default function useBreweries() {
  const [breweries, setBreweries] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (breweries[pageNumber]) {
      return //early out
    }
    setIsLoading(true)
    getBreweries(pageNumber).then(res => {
      setIsLoading(false)
      setBreweries({ ...breweries, [pageNumber]: res.data })
    })
  }, [breweries, pageNumber])
  function decreasePageNumber() {
    pageNumber > 1 && setPageNumber(pageNumber - 1)
  }
  function increasePageNumber() {
    setPageNumber(pageNumber + 1)
  }
  return {
    isLoading,
    breweries: breweries[pageNumber] ?? [],
    showNextPage: increasePageNumber,
    showPreviousPage: decreasePageNumber,
  }
}
