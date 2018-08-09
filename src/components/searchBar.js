import React from 'react'

export default ({ onEnterSearch }) => <div className='search-bar'>
  <input onChange={e => onEnterSearch(e.target.value)} />
</div>
