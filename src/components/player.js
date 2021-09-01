import React,{useState,useEffect,useRef} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import cover from '../assets/images/donda-cover-cd.png'
import PlayerFooter from './player-footer'
import {FaPlay, FaPause} from 'react-icons/fa'
import Axios from 'axios'
export default function Player(props){
  const [tracks,setTracks] = useState(0)
  const [nowPlaying,setNowPlaying] = useState(0)
  const  audioController = useRef(0)
  useEffect(() => {
    Axios.get('https://listen-donda-default-rtdb.asia-southeast1.firebasedatabase.app/tracks.json').then(res=>{
      let fetchedData = []
        for(let key in res.data){
          fetchedData.push({...res.data[key],_id:key})
        }
        setTracks(fetchedData)
        let n = fetchedData.length
        let x = Math.floor(Math.random() * n)
        setNowPlaying(fetchedData[x])
      })
    }, [])
  const playThis=(id,e)=>{
    let track = tracks.filter(function(x){ return x._id===id})[0]
    setNowPlaying(track)
  }
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
                <span>Track {nowPlaying.track}</span>
                <h2>{nowPlaying.title}</h2>
                <span>Artists</span>
                <h5>{nowPlaying.artist}</h5>
                <span>Produced By</span>
                <h5>{nowPlaying.producer}</h5>
              </div>
                <PlayerFooter/>
            </div>
          </Col>
          <Col md={6}>
            <div className="playlist">
              <div className="playlist-header">
                <p>Donda Originals - 2021</p>
                <h2>{nowPlaying.title}</h2>
              </div>
              <audio className="player-controll"
                  id="audioController"
                  ref={audioController}
                  controls
                  autoPlay={true}
                  src={nowPlaying.source}
                />
              <div className="playlist-list">
                <ul>
                  {tracks && tracks.map(track=>
                    <li onClick={e=>playThis(track._id, e)} key={track._id}
                      className={nowPlaying._id===track._id?"active":""}
                    >
                    {nowPlaying._id===track._id?<button className="btn play-btn"><FaPause/></button>:<button className="btn play-btn"><FaPlay/></button>}
                    <p>{track.title}</p>
                    <span>{track.length}</span>
                  </li>
                  )}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
