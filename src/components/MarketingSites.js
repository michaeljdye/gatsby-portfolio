import React, { Component } from 'react'
import outbackConcertsTop from '../images/outback-concerts-top.jpg'
import outbackConcertsMiddle from '../images/outback-concerts-middle.jpg'
import outbackConcertsBottom from '../images/outback-concerts-bottom.jpg'
import rogersGroupTop from '../images/rogers-group-top.jpg'
import rogersGroupMiddle from '../images/rogers-group-middle.jpg'
import rogersGroupBottom from '../images/rogers-group-bottom.jpg'
import rogersGroup from '../images/rogers-group.png'
import nissanStadiumMain from '../images/nissan-main.png'
import nissanStadiumTop from '../images/nissanTop.png'
import nissanStadiumMiddle from '../images/nissanMiddle.png'
import nissanStadiumBottom from '../images/nissanBottom.png'
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
        <H2 left="85px" color="#111">
          Marketing Sites{' '}
          <span aria-label="male superhero emoji" role="img">
            👨‍🎤
          </span>
        </H2>
        <div>
          <img
            src={nissanStadiumMain}
            alt="Nissan Stadium website"
            onClick={() =>
              this.displayLightbox([
                { src: nissanStadiumTop, alt: 'Nissan Stadium Hero' },
                { src: nissanStadiumMiddle, alt: 'Nissan Stadium Events' },
                { src: nissanStadiumBottom, alt: 'Nissan Stadium Mega Menu' },
              ])
            }
          />
          <h3>Nissan Stadium</h3>
          <Btn
            onClick={() =>
              this.displayLightbox([
                { src: nissanStadiumTop, alt: 'Nissan Stadium Hero' },
                { src: nissanStadiumMiddle, alt: 'Nissan Stadium Events' },
                { src: nissanStadiumBottom, alt: 'Nissan Stadium Mega Menu' },
              ])
            }
          >
            View Gallery
          </Btn>
        </div>
        <div>
          <img
            src={rogersGroup}
            alt="Rogers Group Website"
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
          />
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
              View Gallery
            </Btn>
          </div>
        </div>
        <div>
          <img
            src={outbackConcerts}
            alt="Outback Concerts website"
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
            View Gallery
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
