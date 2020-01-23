import React, { Component } from 'react'



export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    return (

      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="city">City</label>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value="All">All</option>
            <option value="Ridgewood">Ridgewood</option>
            <option value="Miami">Miami</option>
            <option value="Dallas">Dallas</option>
          </select>
          <label htmlFor="city">Home Type</label>
          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option value="All">All Homes</option>
            <option value="Ranch">Ranch</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
          </select>
          <label htmlFor="city">Bedrooms</label>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="0 ">0+ BR</option>
            <option value="1 ">1+ BR</option>
            <option value="2 ">2+ BR</option>
            <option value="3 ">3+ BR</option>
            <option value="4">4+ BR</option>
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor='extras'>
              <span>Elevators</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Swimming Pool</span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Finished Basement</span>
              <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>

    )
  }
}


