import React, { Component } from 'react'
import outbackConcertsTop from '../images/outback-concerts-top.jpg'
import outbackConcertsMiddle from '../images/outback-concerts-middle.jpg'
import outbackConcertsBottom from '../images/outback-concerts-bottom.jpg'
import rogersGroupTop from '../images/rogers-group-top.jpg'
import rogersGroupMiddle from '../images/rogers-group-middle.jpg'
import rogersGroupBottom from '../images/rogers-group-bottom.jpg'
import teachAChildTop from '../images/teach-a-child-top.jpg'
import teachAChildMiddle from '../images/teach-a-child-middle.jpg'
import teachAChildBottom from '../images/teach-a-child-bottom.jpg'
import teachAChild from '../images/teach-a-child.png'
import rogersGroup from '../images/rogers-group.png'
import outbackConcerts from '../images/outback-concerts.png'
import { Btn, Grid3Col, ReadMoreBtn } from '../elements'
import Lightbox from './Lightbox'

export default class MarketingSites extends Component {
  constructor() {
    super()
    this.state = {
      showLightbox: false,
      images: [],
    }
  }

  displayLightbox = imgArray => {
    this.setState({
      showLightbox: !this.state.showLightbox,
      images: imgArray,
    })
  }

  render() {
    return (
      <Grid3Col id="marketing-sites" rowGap="4" imgHeight="250px" color="#fff">
        <h2 style={{ color: '#111' }}>Marketing Sites 🦸‍♂️</h2>
        <div>
          <img src={rogersGroup} width="350" />
          <h3>Rogers Group</h3>
          <div>
            <Btn
              onClick={() =>
                this.displayLightbox([
                  { src: rogersGroupTop },
                  { src: rogersGroupMiddle },
                  { src: rogersGroupBottom },
                ])
              }
            >
              View Full Image
            </Btn>
          </div>
        </div>
        <div>
          <img src={outbackConcerts} width="350" />
          <h3>Outback Concerts</h3>
          <Btn
            onClick={() =>
              this.displayLightbox([
                { src: outbackConcertsTop },
                { src: outbackConcertsMiddle },
                { src: outbackConcertsBottom },
              ])
            }
          >
            View Full Image
          </Btn>
        </div>
        <div>
          <img src={teachAChild} width="350" />
          <h3>Teach a Child</h3>
          <Btn
            onClick={() =>
              this.displayLightbox([
                { src: teachAChildTop },
                { src: teachAChildMiddle },
                { src: teachAChildBottom },
              ])
            }
          >
            View Full Image
          </Btn>
        </div>
        <Lightbox
          displayLightbox={this.displayLightbox}
          showLightbox={this.state.showLightbox}
          images={this.state.images}
        />
      </Grid3Col>
    )
  }
}
