import React from 'react'
import Lightbox from 'react-images'
import outbackConcerts from '../images/outback-concerts.png'

export default class TestComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      currentImg: 0,
    }
  }

  closeLightbox = () => {
    this.setState({ currentImg: 0 }, this.props.displayLightbox([]))
  }

  goToNext = () => {
    this.setState(prevState => ({
      currentImg: prevState.currentImg + 1,
    }))
  }

  goToPrevious = () => {
    this.setState(prevState => ({ currentImg: prevState.currentImg - 1 }))
  }

  render() {
    return (
      <Lightbox
        images={this.props.images}
        isOpen={this.props.showLightbox}
        currentImage={this.state.currentImg}
        onClickPrev={this.goToPrevious}
        onClickNext={this.goToNext}
        onClose={this.closeLightbox}
      />
    )
  }
}
