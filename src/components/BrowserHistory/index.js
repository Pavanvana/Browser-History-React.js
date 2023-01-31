import './index.css'

import {Component} from 'react'

import BrowserTodo from '../BrowserTodo'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    browserHistoryList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({browserHistoryList: initialHistoryList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateDeleteTodo = id => {
    const {browserHistoryList} = this.state
    const updatedHistoryList = browserHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({browserHistoryList: updatedHistoryList})
  }

  render() {
    const {searchInput, browserHistoryList} = this.state
    const searchResult = browserHistoryList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="navbar">
          <div className="search-input-container">
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container ">
              <div className="search-icon-color">
                <img
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                value={searchInput}
                onChange={this.onChangeInput}
                className="search-input"
                type="search"
                placeholder="Search history"
              />
            </div>
          </div>
        </div>
        <div className="destinations-search-container">
          {searchResult.length > 0 ? (
            <ul className="destinations-list">
              {searchResult.map(eachHistory => (
                <BrowserTodo
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                  updateDeleteTodo={this.updateDeleteTodo}
                />
              ))}
            </ul>
          ) : (
            <p className="no-history">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}
export default BrowserHistory
