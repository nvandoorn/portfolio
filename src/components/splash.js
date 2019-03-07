import React, { Component } from 'react'
import { css } from '@emotion/core'
import { Button } from './button'
import { colours } from './globals'

const splashStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 30vh;
`

const buttonContainer = css`
  display: flex;
  justify-content: center;
  flex: 1;
`

const headingStyle = css({
  fontSize: '4em',
  fontWeight: 900
})

const subHeadingStyle = css({
  fontSize: '1.4em',
  fontWeight: 700
})

export class Splash extends Component {
  render = () => (
    <div css={splashStyle}>
      <div>
        <h2 css={headingStyle}>{this.props.heading} </h2>
        {this.props.subHeadings
          ? this.props.subHeadings.map(subHeading => (
              <h3 key={subHeading} css={subHeadingStyle}>
                {subHeading}
              </h3>
            ))
          : null}
      </div>
      <div css={buttonContainer}>
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
