import React from 'react'
import Img1 from '../../assets/img/works/imgrenov1.png'
import Img2 from '../../assets/img/works/imgrenov2.png'
import Img3 from '../../assets/img/works/imgrenov3.png'
import Img4 from '../../assets/img/works/imgrenov4.png'
import Img5 from '../../assets/img/works/imgrenov5.png'

const Portfolio = () => {
  return (
    <div className='container'>
        <h1>Nos derniers projets</h1>
        <h4>Les réussites de JBY et les propriétaires satisfaits</h4>
        <div className='row'>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner" style={{borderRadius: "20px"}}>
              <div className="carousel-item active">
                <img src={Img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide</h5>
                  <p>Some representative placeholder content for this slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide</h5>
                  <p>Some representative placeholder content for this slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide</h5>
                  <p>Some representative placeholder content for thisslide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Img4} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fourth slide</h5>
                  <p>Some representative placeholder content for this slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Img5} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fiveth slide </h5>
                  <p>Some representative placeholder content for this slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Portfolio