import React, { Component } from 'react'

import { NeuCard, NeuReaction } from 'neomorphism-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <br />
        <br />
        <NeuReaction />
        <br />
        <br />
        <NeuCard text='Modern React component module' />
      </div>
    )
  }
}