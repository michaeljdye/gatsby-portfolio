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
import { Btn, Grid3Col, H2 } from '../elements'
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
        <H2 color="#111">
          Marketing Sites{' '}
          <span aria-label="male superhero emoji" role="img">
            🦸‍♂️
          </span>
        </H2>
        <div>
          <img src={rogersGroup} alt="Rogers Group Website" width="350" />
          <h3>Rogers Group</h3>
          <div>
            <Btn
              onClick={() =>
                this.displayLightbox([
                  { src: rogersGroupTop, alt: 'Rogers Group website top' },
                  {
                    src: rogersGroupMiddle,
                    alt: 'Rogers Group website middle',
                  },
                  {
                    src: rogersGroupBottom,
                    alt: 'Rogers Group website bottom',
                  },
                ])
              }
            >
              View Full Image
            </Btn>
          </div>
        </div>
        <div>
          <img
            src={outbackConcerts}
            alt="Outback Concerts website"
            width="350"
          />
          <h3>Outback Concerts</h3>
          <Btn
            onClick={() =>
              this.displayLightbox([
                {
                  src: outbackConcertsTop,
                  alt: 'Outback Concerts website top',
                },
                {
                  src: outbackConcertsMiddle,
                  alt: 'Outback Concerts website middle',
                },
                {
                  src: outbackConcertsBottom,
                  alt: 'Outback Concerts website bottom',
                },
              ])
            }
          >
            View Full Image
          </Btn>
        </div>
        <div>
          <img src={teachAChild} alt="Teach a Child website" width="350" />
          <h3>Teach a Child</h3>
          <Btn
            onClick={() =>
              this.displayLightbox([
                { src: teachAChildTop, alt: 'Teach a Child website top' },
                { src: teachAChildMiddle, alt: 'Teach a Child website middle' },
                { src: teachAChildBottom, alt: 'Teach a Child website bottom' },
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
