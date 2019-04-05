import { parseQuery as parseQueryGlobal, objectToQuery } from './url'

const parseQuery = search =>
  parseQueryGlobal({
    search
  })

test('parseQuery', () => {
  expect(parseQuery('?mySearch=myVal')).toEqual({ mySearch: 'myVal' })
  expect(parseQuery('?mySearch=myVal&againWith=aVal')).toEqual({
    mySearch: 'myVal',
    againWith: 'aVal'
  })
  // test that these 2 functions are inverses
  // (e.g composing them produces `const f = k => k`)
  let input = '?big=long&one=eh'
  expect(objectToQuery(parseQuery(input))).toEqual(input)
  input = { args: 'hi', onArgs: 'helloagain' }
  expect(parseQuery(objectToQuery(input))).toEqual(input)
})
