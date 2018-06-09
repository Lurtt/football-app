import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pusher from 'pusher-js'

import { Pitch, Header, Loading } from './components'

const pusher = new Pusher('6a3acdaba86ad858948b', {
  cluster: 'eu',
})

const Main = styled.main`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

class App extends Component {
  state = {
    data: null,
    teamFormation: [],
  }

  from = 0
  splitToFormation = (item, index) => {
    const { players } = this.state.data
    const result = players.slice(this.from, item + this.from)
    this.from += item

    return result
  }

  updateTeamFormation = data => {
    this.setState({ data })
    const formation = data.formation.split('').map(t => +t)
    formation.unshift(1)

    const teamFormation = formation.map(this.splitToFormation)
    this.setState({ teamFormation, formation })
    this.from = 0
  }

  componentDidMount() {
    axios
      .get('http://lineups.dev.fantech.io')
      .then(response => this.updateTeamFormation(response.data))
      .catch(error => {
        throw new Error(`I crashed! ${error}`)
      })

    const channel = pusher.subscribe('lineups')
    channel.bind('lineup-updated', this.updateTeamFormation)
  }

  render() {
    const { data, teamFormation } = this.state
    return (
      <Fragment>
        {!data ? (
          <Loading />
        ) : (
          <Main>
            <Header team={data.team} formation={data.formation} />
            <Pitch team={teamFormation} />
          </Main>
        )}
      </Fragment>
    )
  }
}

export default App
