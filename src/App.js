import React, { useState, useEffect } from 'react'
import ToolBar from './components/Toolbar'
import Steps from './components/Steps'
import TrackList from './components/TrackList'
import PlayHead from './components/PlayHead'
import { Provider } from './hooks/useStore'
import useTimer from './hooks/useTimer'
import useStyles from './hooks/useStyles'
import './App.css'
import { RelayProvider } from './hooks/useRelay'

import Relay from './components/Relay'
function App() {

    const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [BPM, setBPM] = useState(10)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStepID, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const [externalWindow, setExternalWindow] = useState(null)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / BPM * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime


    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        BPM
    }

    const playHeadProps = {
        notesAreaWidthInPixels,
        timePerSequence,
        totalLapsedTime
    }

    const trackListProps = {
        currentStepID
    }

    const setContent = (w, title) => {
        if (w) {
            w.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${title}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 20px;
                        }
                        video {
                            display: block;
                            margin: 0 auto;
                            max-width: 100%;
                        }
                    </style>
                </head>
                <body>
                <video id="vidsrc" src="${window.location}vid/1.mp4" autoplay muted loop controls>
                </video>
                </body>
                </html>
            `)
            // Optionally, close the document to finish loading the content
            w.document.close()
            // newWindow.location = url
        } else {
            alert('Failed to open new window. Please allow popups for this website.')
        }
    }

    const openWindow = () => {
        var newWindow1 = window.open('', '_video1')
        setContent(newWindow1, "VIDEO L")
        var newWindow2 = window.open('', '_video2')
        setContent(newWindow2, "VIDEO R")
        setExternalWindow([newWindow1, newWindow2])

    }

    const toggleAnimation = () => {
        externalWindow[0].document.getElementById("vidsrc").src = `${window.location}vid/${Math.floor(Math.random() * 3 + 1)}.mp4`
        externalWindow[1].document.getElementById("vidsrc").src = `${window.location}vid/${Math.floor(Math.random() * 3 + 1)}.mp4`
    }

    return (
        <Provider>
            <RelayProvider>
            <main className="app">
                <header className="app_header">
                    <h1 className="app_title">
                        <img src="logo4.png" width="150em"></img>
                        <Relay/>
                    </h1>
                    <ToolBar {...toolBarProps} />
                </header>
                <Steps count={totalSteps} />
                <div className="app_content">
                    <PlayHead {...playHeadProps} />
                    <TrackList {...trackListProps} />
                </div>
                <button onClick={openWindow}>Open 2de scherm</button>
                <button onClick={toggleAnimation}>verander video</button>
                <footer className="app_footer">
                    Source code on <a href="https://github.com/joeshub/react-808">on Github</a>, Built by <a href="http://seifi.org/">Joe Seifi</a> using React.js
                </footer>
            </main >
            </RelayProvider>
        </Provider>
    )
}

export default App
