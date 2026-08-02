

import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({list = []}) {
  return (
    <div className='menu-list-container' >
        {
            list && list.length ? 
            list.map(()=> <MenuItem item={listItem} />)
            : null
        }
    </div>
  )
}
