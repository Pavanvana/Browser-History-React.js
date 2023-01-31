import './index.css'

const BrowserTodo = props => {
  const {historyDetails, updateDeleteTodo} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDeleteTodo = () => {
    updateDeleteTodo(id)
  }
  return (
    <li className="destination-item ">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img className="destination-image" src={logoUrl} alt="domain logo" />
          <div className="url-container">
            <p className="browser-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="browser-end">
        <button
          onClick={onDeleteTodo}
          type="button"
          className="delete-button"
          data-testId="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserTodo
