import React from 'react'

import './Tile.css'

const Tile = (props) => {
const color= props.selected || props.matched? {backgroundColor:props.color}:null;
function fun(){
props.handleTileClicked(props.id,props.color)
}
  return (
    <div className='Tile' style={color} onClick={fun}>
      {props.selected || props.matched?<props.svg/>:null}
    </div>
  )
}

export default Tile
