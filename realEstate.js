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
      city: 'All',
      homeType: '0',
      bedrooms: 0,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      gym: false,
      finished_basement: false,
      filteredData: listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }

  // Method for change
  change(event) {
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  // Method for filtering Data
  filteredData() {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })

    if (this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }
    this.setState({
      filteredData: newData
    })
  }

  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
        <Listings listingsData={this.state.filteredData} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
