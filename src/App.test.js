import App from './App'

jest.mock('./components/Loading', () => 'Loading')

describe('<App />', () => {
  test(`Should has 'from' field `, () => {
    const app = new App()

    expect(app.from).toEqual(0)
  })
})
