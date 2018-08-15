import React from 'react'

export default ({ onEnterSearch }) => <div className='search-bar'>
  <input className='search-bar' onChange={e => onEnterSearch(e.target.value)} />
</div>
