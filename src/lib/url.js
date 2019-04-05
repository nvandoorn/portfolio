import { location, history } from 'browser-monads'
export const parseQuery = ({ search } = location) =>
  search && parseQueryString(search)

const parseQueryString = query =>
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

export const writeQuery = (queryObj, { pushState } = history) => {
  pushState({}, '', objectToQuery(queryObj))
}
