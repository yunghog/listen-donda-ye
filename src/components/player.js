import React,{useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import cover from '../assets/images/donda-cover-cd.png'
import PlayerFooter from './player-footer'
export default function Player(props){
  return(
    <section className="player" id="player">
      <Container>
        <Row>
          <Col md={6}>
            <div className="player-panel">
              <div className="player-panel-top">
                <img src={cover} alt='donda-artwork'/>
              </div>
              <div className="player-panel-bottom">
                <h2>Praise god</h2>
                <h5>Kanye West, Travis Scott, Baby Keem</h5>
                <PlayerFooter/>
              </div>
            </div>
          </Col>
          <Col md={6}>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
