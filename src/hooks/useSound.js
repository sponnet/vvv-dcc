import { useState, useCallback } from 'react'

const useSound = () => {
    const [sound] = useState({ play: () => { } })
    const play = useCallback(() => {
        // sound.play()
    })

    // useEffect(() => {
    //     setSound(new Sound(soundFilePath))

    // }, [soundFilePath])

    return [play]
}

export default useSound
