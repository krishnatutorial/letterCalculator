// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', } 
  calculateLetetr = event => {
      this.setState({
        searchInput: event.target.value,
        
      })
    }
  render() {
    const {searchInput} = this.state
   
    
    return
    ;<div className="container">
      <h1 className="heading">Calculate the Letters you enter</h1>
      <label htmlFor="phraseText" >Enter the phrase</label>
      <input  id="phraseText" type="text" onChange={this.calculateLetetr} placeholder="Enter the phrase" value={searchInput}/>
      <div className="c2">
        <p className="button">No.of letters:{searchInput.length}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
      />
    </div>
  }
}

export default LettersCalculator
