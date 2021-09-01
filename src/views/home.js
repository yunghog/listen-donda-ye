import React,{ Component } from 'react'
import Player from '../components/player'
import Hero from '../components/hero'
export default class Home extends Component{
  render(){
    return(
        <section>
          <Hero/>
          <Player/>
        </section>
    )
  }
}
