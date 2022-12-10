// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, word: 'even'}

  onIncrement = () => {
    const {count} = this.state
    this.setState(() => {
      console.log('even')
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  isCategory = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return <p className="category">Count is Even</p>
    }
    return <p className="category">Count is Odd</p>
  }

  render() {
    const {count, word} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>

          {this.isCategory()}
          <div>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
