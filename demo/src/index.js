import React, {Component} from 'react'
import {render} from 'react-dom'

import Glass from '../../src'

import './Demo.css'

export default class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <div className='mockpage'>
          <Glass className='glass' borderRadius='16px' style={{ width: '800px', height: '300px' }}>
          </Glass>
          <div style={{ height: '300px', padding: '20px' }}>
            <p className='title'>
              My Webpage
            </p>
          </div>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
