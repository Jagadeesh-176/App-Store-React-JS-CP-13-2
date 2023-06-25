// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onUpdateTab = () => {
    updateTab(tabId)
  }

  const colorTabClassName = isActive ? 'color-tab' : ''

  return (
    <li className="tab-list-con">
      <button
        type="button"
        className={`button ${colorTabClassName}`}
        onClick={onUpdateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
