import 'react-native'
import React from 'react'
import App from 'src/App'

import renderer from 'react-test-renderer'

it('works', () => {
  expect(1).toBe(1)
})

it('renders without crashing', () => {
  const rendered = renderer.create(<App/>).toJSON()
  expect(rendered).toBeTruthy()
})
