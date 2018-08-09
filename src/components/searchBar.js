import React from 'react'

export default ({ onEnterSearch }) => {
  return <div className='search-bar'>
    <input
      onChange={e => onEnterSearch(e.target.value)} />
  </div>
}
