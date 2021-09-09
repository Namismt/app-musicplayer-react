import React from 'react'

import { FaPlayCircle, FaPauseCircle, FaForward, FaBackward} from 'react-icons/fa';


function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
            <FaBackward/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
             {props.isPlaying ? <FaPauseCircle/> : <FaPlayCircle/>}
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FaForward/>
            </button>
        </div>
    )
}

export default Controls