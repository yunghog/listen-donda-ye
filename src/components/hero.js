import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleDoubleDown } from 'react-icons/fa'
import AOS from 'aos'
export default function Hero(){
  AOS.init({
      duration: '1000'
  })
  return(
    <section className="hero">
      <Container fluid>
        <Row className="g-0">
          <Col md={12}>
            <div className="hero-con" data-aos="fade">
              <div className="hero-text">
                <h3 data-aos="fade-up" data-aos-delay="1000">Kanye West</h3>
                <h1>DONDA</h1>
                <p  data-aos="fade-down" data-aos-delay="2000">Virtual Listening Party</p>
              </div>
              <div>
                <a href="#player">
                <button className="btn-swipe-down">
                  <FaAngleDoubleDown/>
                </button>
                </a>
              </div>
              <div className="hero-overlay"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
