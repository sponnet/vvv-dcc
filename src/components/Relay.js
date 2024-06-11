import React, { useEffect, memo } from 'react'
import classNames from 'classnames'
import { useRelay } from '../hooks/useRelay'
import './Relay.css'

const RelayDot = ({
    isRelayOn,
    number
}) => {

    const relayClassNames = classNames('relay', {
        'on': isRelayOn
    })


    return (
        <div
            className={relayClassNames}
        >{number}</div>
    )
}


const Relay = () => {

    const { deviceInfo, openDevice, relayStates } = useRelay()
    useEffect(() => {
        console.log("RELAYSTATES", relayStates)
    }, [relayStates])

    return (
        <div style={{ height: '140px', width: '80%', border: '1px solid black', padding: '0.5rem', fontSize: 'var(--base-font-size)' }}>
            {deviceInfo ? (
                <>
                    <h1 className="vvvgreen" style={{ fontSize: '3em' }}>Connected</h1>
                    <div>{deviceInfo.productName}</div>
                </>
            ) : (
                <>
                    <div className="vvvred" style={{ fontSize: '3em' }}>Not connected</div>
                    <button onClick={openDevice}>Connect</button>

                </>

            )}
            <div className='relaycontainer'>
                {relayStates.map((state, index) => <RelayDot key={index} number={index + 1} isRelayOn={state} />)}
            </div>

        </div>
    )
}

export default memo(Relay)
