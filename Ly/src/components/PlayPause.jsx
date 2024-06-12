import React from 'react'
import {FaPauseCircle,FaPlayCircle}from 'react-icons'


const PlayPause({isPlaying,activeSong,song,handelPause,handelPlay})=> (isPlaying&& activeSong?.title==song.title?(
    <FaPauseCircle
      size={35}
      className="text-gray-300" 
      onClick={handelPause}     
    />):
    (<FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handelPlay}    
    />))

export default PlayPause