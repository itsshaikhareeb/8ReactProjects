

import React from 'react'
import MenuList from './MenuList'
import { useState } from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({item}) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function handleToggleChildren(getCurrentLabel){
    setDisplayCurrentChildren(
      {
        ...displayCurrentChildren,[getCurrentLabel] : !displayCurrentChildren[getCurrentLabel],
      }
    )
  }
  console.log(displayCurrentChildren);
  return (
    <li className='menu-item' >
      <div style={{display:'flex',gap:'20px'}} >
      <p>{item.label}</p>
      {item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)} >
        {
            displayCurrentChildren[item.label] ? <FaMinus className='minus' size={25} color='#fff' /> : <FaPlus className='plus' color='#fff' size={25}/>
        }
      </span> : null}
      </div>

      {
        item && item.children && item.children.length > 0 &&displayCurrentChildren[item.label] ?
        <MenuList list={item.children} />
        :
        null
      }
    </li>
  )
}
