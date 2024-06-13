import React from 'react'
import {link} from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import PlayPause from './PlayPause'
import { playPause,setActiveSong } from '../redux/features/playerSlice'
function SongCard({song,isPlaying,activeSong,i,data}) {

  const handlepauseClick=()=>{
    dispatch(playPause(false));
   };
    const handleplayClick=()=>{ 
     dispatch(setActiveSong({song,i, data}))
     dispatch(playPause(true));

    };
  return (
    
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slieup roudned-lg cursor-pointer'> 
      <div>
        <PlayPause 
        isPlaying={isPlaying} 
        activeSong={activeSong}
        song= {song}
        handlepause={handlepause}
        handleplay ={handleplay}  />
      </div>
      <p className='flex flex-col mt-4 font-semibold truncate'>
        <link to ={`/songs/${song?.key}`}>
        {song.title}
        </link>
      </p>
      <p>
        <link to ={song.artists ?`/artists/${song?.artisits[0]?.adamid}`:`/top-artists`}></link>
      </p>
      </div>

  )
}

export default SongCard