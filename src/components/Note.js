import React, { useContext, useEffect, memo, useCallback } from 'react'
import classNames from 'classnames'
import { Context } from '../hooks/useStore'
import './Note.css'
import { useRelay } from '../hooks/useRelay'

const Note = ({
    trackID,
    stepID,
    isNoteOn,
    isNoteOnCurrentStep,
    relayPulseLength
}) => {

    const { toggleNote } = useContext(Context)
    const { toggle } = useRelay()
    const noteClassNames = classNames('note', {
        'on': isNoteOn,
        'playing': isNoteOn && isNoteOnCurrentStep
    })

    useEffect(() => {
        if (isNoteOnCurrentStep) {
            toggle(isNoteOn, trackID, relayPulseLength)
        }
    }, [isNoteOn, toggle, trackID, isNoteOnCurrentStep])

    const noteClicked = e => {
        e.target.classList.toggle('on')
        toggleNote({ trackID, stepID })
    }

    return (
        <div
            className={noteClassNames}
            onClick={noteClicked}
        />
    )
}

export default memo(Note)
