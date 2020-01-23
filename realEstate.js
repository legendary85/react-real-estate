import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Listings from './Listings.js'
import Filter from './Filter.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      listingsData,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      gym: false,
      finished_basement: false
    }
    this.change = this.change.bind(this)
  }

  change(event) {
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
        <Listings listingsData={this.state.listingsData} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
