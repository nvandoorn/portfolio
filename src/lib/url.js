import { window } from 'browser-monads'

export const parseQuery = () =>
  window.location.search && parseQueryString(window.location.search)

export const parseQueryString = query =>
  query
    .split('?')[1]
    .split('&')
    .reduce((acc, pair) => {
      const [key, val] = pair.split('=')
      return {
        ...acc,
        [key]: val
      }
    }, {})

export const objectToQuery = query =>
  Object.entries(query).reduce(
    (acc, [key, val], i) => acc + `${i !== 0 ? '&' : ''}${key}=${val}`,
    '?'
  )

export const writeQuery = queryObj => {
  window.history.pushState({}, '', objectToQuery(queryObj))
}
