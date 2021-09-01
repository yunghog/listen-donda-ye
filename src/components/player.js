import React,{useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import cover from '../assets/images/donda-cover-cd.png'
import PlayerFooter from './player-footer'
import {FaPlay, FaPause} from 'react-icons/fa'
import ReactAudioPlayer from 'react-audio-player';

export default function Player(props){
  const [nowPlaying,setNowPlaying] = useState(0)
  return(
    <section className="player" id="player">
      <Container>
        <Row className="g-0">
          <Col md={6}>
            <div className="player-panel">
              <div className="player-panel-top">
                <img src={cover} alt='donda-artwork'/>
              </div>
              <div className="player-panel-bottom">
                <h2>Praise god</h2>
                <h5>Kanye West, Travis Scott, Baby Keem</h5>
                <ReactAudioPlayer
                  src="https://firebasestorage.googleapis.com/v0/b/listen-donda.appspot.com/o/leaks%2F11%20New%20Again%20(feat.%20Chris%20Brown).mp3?alt=media&token=6d92289c-8aa0-4d81-aef9-c5cfecd93855"
                  autoPlay
                  controls
                />
                <PlayerFooter/>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="playlist">
              <div className="playlist-header">
                <p>Donda - 2021</p>
                <h2>Praise God</h2>
              </div>
              <div className="playlist-list">
                <ul>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li className="active">
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li className="active">
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                  <li>
                    <button className="btn play-btn"><FaPlay/></button>
                    <p>Praise God</p>
                    <span>3:40</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
