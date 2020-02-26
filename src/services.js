import axios from 'axios'

export function getBreweries(pageNumber = 1) {
  return axios.get(
    'https://api.openbrewerydb.org/breweries?per_page=30&page=' + pageNumber
  )
}
