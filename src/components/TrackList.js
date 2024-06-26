import React, { useContext, memo } from 'react'
import { Context } from '../hooks/useStore'
import Track from './Track'

const TrackList = ({ currentStepID }) => {
    const { sequence: { trackList, noteCount } } = useContext(Context)
    const content = trackList.map((track, trackID) => {
        const { title, onNotes,relayPulseLength } = track

        return (
            <Track
                key={title}
                trackID={+trackID}
                currentStepID={currentStepID}
                title={title}
                noteCount={noteCount}
                onNotes={onNotes}
                relayPulseLength={relayPulseLength}
            />
        )
    })

    return (
        <div className="track-list">
            {content}
        </div>
    )
}

export default memo(TrackList)

