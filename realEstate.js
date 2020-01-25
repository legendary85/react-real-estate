import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Listings from './Listings.js'
import Filter from './Filter.js'
import listingsData from './data/listingsData.js'
import Footer from './Footer.js'

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
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }


  componentDidMount() {
    // sorting lowest price to highest price
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
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


  // Method to change view
  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  // Method for filtering Data
  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
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

    // sort from lowest price  to highest
    if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    // Sort from highest price to lowest
    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    // Search filter
    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }
      })
    }


    this.setState({
      filteredData: newData
    })
  }


  // Method for populating Data
  populateForms() {
    // city
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    // For sorting cities
    cities = cities.sort()

    // homeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    // For sorting homeTypes
    homeTypes = homeTypes.sort()

    // bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    // for sorting number of bedrooms
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log("Forms Data")
      console.log(this.state)
    })

  }


  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change}
          globalState={this.state}
          populateAction={this.populateForms} />
        <Listings listingsData={this.state.filteredData}
          change={this.change}
          globalState={this.state} changeView={this.changeView} />
      </section>
      <Footer />
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
