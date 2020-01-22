import React, { Component } from 'react'



export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render() {
    return (<header>
      <div className="logo">Logo</div>

      <nav>
        <a href="#">create Ads</a>
        <a href="#"> About us</a>
        <a href="#">Log in</a>
        <a href="#" className='register-btn'>Register</a>
      </nav>
    </header>)
  }
}


