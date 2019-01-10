import React from 'react'
import Layout from '../components/layout'
import { Project } from '../components/project'
import { DefaultButton as Button } from '../components/button'
import functional from '../images/functional.png'
import camera from '../images/camera.png'
import storageService from '../images/storage-service.png'
import gpsMonitor from '../images/gps-monitor.png'
import cookBook from '../images/cookbook.png'
import slask from '../images/slask.png'
import ie from '../images/ie.png'

const projects = [
  {
    name: 'funCtional',
    brief: 'Functional programming in C with statically allocated memory',
    date: 'Aug 2018',
    desc: `I like functional programming and I like C, so I tried to combine the two.
          In  reality, a simple for loop is better, but I had fun trying this.`,
    imgUrl: functional,
    inProd: true,
    url: ''
  },
  {
    name: 'Legato Storage Service',
    brief: 'Non-volatile time series data storage',
    date: 'Jun 2018 - Present',
    imgUrl: storageService,
    desc: `The Legato Linux framework offers out of the box support for
          uploading time series data, but not storing it locally. For this reason,
          we created this service to persist data for offline cases.`,
    url: ''
  },
  {
    name: 'Legato GPS Monitor',
    brief:
      'Monitor GPS in a separate process to avoid blocking single threaded apps',
    date: 'April 2018',
    imgUrl: gpsMonitor,
    desc: `Instead of managing and synchronizing a thread to monitor GPS location
          on embeded devices, this service asynchronously monitors the GPS position
          and allows users to retrieve it using an inter process API
          (see more about Legato IPC APIs here).`,
    inProd: true,
    url: ''
  },
  {
    name: 'CF3 Config App',
    brief: 'Automatically configure common settings for CF3 based modules',
    date: 'April 2018',
    desc: `Sierra Wireless offers a range of cellular modules based on a common socket with a
          common set of inputs and outputs.A range of commonly used input / output pins and UART
          connections must be configured by running an AT command over a serial connection to the
          CF3 based modem.Run this app once and the CF3 based module will support the full range of
          GPIO pins and UARTs in the Linux userspace.`,
    inProd: true,
    url: ''
  },
  {
    name: 'Legato Camera Driver',
    brief: 'Support for the VC0706 camera on a Legato based project',
    date: 'Nov 2017 - Dec 2017',
    desc: `The VC0706 camera is one of the only low power remote cameras with an open protocol
          (serial port based).The seller, Adafruit, supplies open source drivers implemented
          in Python and C++ with the purpose of running on Arduino based systems. This means
          a dependency on certain Arduino libraries for reading and writing to the serial port.
          We re-implemented the C++ driver in C without the depedence on anything
          not included in Linux (with the exception of a few Legato specific macros).`,
    imgUrl: camera,
    inProd: true,
    url: ''
  },
  {
    name: 'Cookbook',
    brief: 'Match with strangers and chat using pre-defined messages',
    date: 'October 2017 - Present',
    desc: `Online dating is controversial and messy. Every other day some new app
          has an idea to fix it. I propose we simply limit peoples conversations options
          to the bare essentials.`,
    imgUrl: cookBook,
    url: ''
  },
  {
    name: 'ccss',
    brief: 'A slightly more polite variant of CSS',
    date: 'Jul 2017',
    links: '',
    desc: `ccss transforms the correct spelling of colour to color in your CSS. This was intended
          to be part one of a series of awful CSS transforms. Other transform ideas include:
          multiple variants of the !important rule (!mostly-important, !sometimes-important,
          !not-that-important), complex vertical alignment algorithms (flex and grid kindof
          ruined this one), and mixins for 1980s style typography.`,
    imgUrl: '',
    url: ''
  },
  {
    name: 'slask',
    brief: 'A lightweight log viewer and server all in one',
    date: 'Mar 2017 - Present',
    desc: (
      <>
        slask is designed to make remote systems debugging easy. During my time
        at Forest Technology Systems (FTS), we worked on a remote weather
        station based on a single board Linux computer. During the early days, I
        spent large amounts of time transferring and filtering log files using a
        mix of <em>scp</em>, <em>grep</em>, and <em>less</em>.
      </>
    ),
    imgUrl: slask,
    url: ''
  },
  {
    name: 'IE Media Queries',
    brief: 'Support media queries in Internet Explorer 8',
    date: 'April 2013',
    desc: `IE Media Queries is a Javascript polyfill for Internet Explorer 8's lack of
          media query support. IE8 is more or less dead and unsupported, but I still
          enjoyed re-creating unsupported functionality`,
    imgUrl: ie,
    url: ''
  }
]

export default () => (
  <Layout>
    {projects.map(project => (
      <Project {...project} key={project.name} />
    ))}
  </Layout>
)
