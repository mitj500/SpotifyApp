import React from 'react'
import {link} from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import PlayPause from './PlayPause'
import { playPause,setActiveSong } from '../redux/features/playerSlice'
function SongCard({song,i}) {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slieup roudned-lg cursor-pointer'> 
      <div className=''/>
      </div>
  )
}

export default SongCard