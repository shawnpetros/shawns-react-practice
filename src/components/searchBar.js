import React from 'react'

export default ({ onEnterSearch }) => <input
  className='search-bar'
  onChange={e => onEnterSearch(e.target.value)} />
