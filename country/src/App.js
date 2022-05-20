import React, { Component } from 'react'
import countries from './products/data/countries.json'
import regions from './products/data/regions.json'
import cities from './products/data/cities.json'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countriesId: '',
      regionsId: '',
    }
  }
  countryChanging = (event)=>{
    this.setState({countriesId: event.target.value})
  }
  regionChanging = (event)=>{
    this.setState({regionsId: event.target.value})
  }
  render() {
    const{countriesId,regionsId} = this.state
    const result = countries.find(c=> c.id === countriesId)
    return (
      <div>
        <select value={countriesId} onChange={this.countryChanging}>
          {countries.map(countr =>(<option key={countr.id} value={countr.id} >{countr.name}</option>))}
        </select>
        {countriesId ? (
          <select value={regionsId} onChange={this.regionChanging} className="region">
            {regions.filter(reg => reg.country_id === countriesId).map(reg => (
                <option key={reg.id} value={reg.id}>{reg.name}</option>))}
          </select>): null}

          {result ?
            <img src={`/icons/${result.code.toUpperCase()}.png`} alt="Flags" />
          : null}

          {regionsId ? 
            (<ul>
              {cities.filter(c=> c.region_id === regionsId).map(c=>(
                <li key={c.id}> {c.name} </li>
              ))}
            </ul>
            ):null}
      </div>
    )
  }
}

export default App
