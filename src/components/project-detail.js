import React from 'react'
import { css } from '@emotion/core'

import { SplitContainer } from './split-container'
import { Image } from './image'
import { margins, breakpoints } from './globals'

const descContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  @media (min-width: ${breakpoints[0].breakpoint}px) {
    margin: 0 0 0 ${margins.md}px;
  }
  & > * {
    margin: 0 0 ${margins.md}px 0;
  }
`

const imgContainerStyle = css`
  display: flex;
  & > *:not(:last-child) {
    margin-right: ${margins.sm}px;
  }
`

export const ProjectDetail = ({ listItems, header, images }) => (
  <section
    css={css`
      width: 100%;
      margin-bottom: ${margins.md}px;
    `}
  >
    <SplitContainer>
      <div css={descContainerStyle}>
        {header ? <h4>{header}</h4> : null}
        {listItems ? (
          <ul>
            {listItems.map((k, i) => (
              <li key={`detail-item-${i}`}>{k}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div css={imgContainerStyle}>
        {images
          ? images.map((k, i) => <Image key={`image-${i}`} {...k} />)
          : null}
      </div>
    </SplitContainer>
  </section>
)
