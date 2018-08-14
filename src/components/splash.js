import React, { Component } from 'react'
import { css } from 'emotion'
import { Button } from './button'
import { colours } from './globals'

const splashStyle = css(`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 30vh;
`)

const buttonContainer = css(`
  display: flex;
  justify-content: center;
  flex: 1;
`)

const headingStyle = css({
  fontSize: '4em',
  fontWeight: 900
})

const subHeadingStyle = css({
  fontSize: '1.4em',
  fontWeight: 700
})

export class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentEmoji: 0
    }
    setInterval(this.incrementEmoji, 2 * 1000)
  }

  incrementEmoji = () => {
    const state = {
      currentEmoji:
        this.state.currentEmoji < this.props.emojiList.length - 1
          ? this.state.currentEmoji + 1
          : 0
    }
    this.setState(state)
  }

  render = () => (
    <div className={splashStyle}>
      <div>
        <h2 className={headingStyle}>
          {this.props.heading} {this.props.emojiList[this.state.currentEmoji]}
        </h2>
        {this.props.subHeadings
          ? this.props.subHeadings.map(subHeading => (
              <h3 key={subHeading} className={subHeadingStyle}>
                {subHeading}
              </h3>
            ))
          : null}
      </div>
      <div className={buttonContainer}>
        <Button
          fontSize="1.5em"
          fontWeight="800"
          href=""
          background={colours.background}
          hoverBackground={colours.main}
          hoverColour={colours.background}
          to={this.props.heroBtnTo}
        >
          {this.props.heroBtnText}
        </Button>
      </div>
    </div>
  )
}
