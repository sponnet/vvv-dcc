import React, { createContext, useContext, useState, useEffect } from 'react'

let device
let relayTimers = []

const RelayContext = createContext()

const RelayProvider = ({ children }) => {

    const [deviceInfo, setDeviceInfo] = useState()
    const [relayStates, setRelayStates] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    const closeDevice = async () => {
        if (device && device.opened === true) {
            console.log(`closing device`)
            device.close()
            device = null
            setDeviceInfo(null)
            return
        }
    }

    const openDevice = async () => {
        if (device && device.opened === true) {
            console.log(`device already connected`)
            return
        }

        const vendorId = 5824 // blink1 vid
        const productId = 1503  // blink1 pid

        const device_list = await navigator.hid.getDevices()
        console.log(device_list)

        device = device_list.find(d => d.vendorId === vendorId && d.productId === productId)

        if (!device) {
            // this returns an array now
            let devices = await navigator.hid.requestDevice({
                filters: [{ vendorId, productId }],
            })
            console.log("devices:", devices)
            device = devices[0]
            if (!device) return null
        }

        if (!device.opened) {
            await device.open()
        }
        console.log("device opened:", device)

        setDeviceInfo({
            productName: device.productName,
            opened: device.opened,
        })
    }

    const reset = () => {
        for (let i = 0; i < 8; i++) {
            toggle(false, i)
            if (relayTimers[i]) {
                clearTimeout(relayTimers[i])
            }
        }
    }

    const switchRelay = async (cmd, relayNr) => {
        if (!device) return
        let buf = Uint8Array.from([cmd, relayNr, relayNr])
        try {
            await device.sendFeatureReport(0, buf)
        } catch (error) {
            console.error('relay cmd failed:', error)
        }
    }


    const toggle = async (on, index, duration) => {
        // console.log(`toggle ${on ? "on" : "off"} relay ${index}`)
        // console.log(`--> stat states ${relayStates.map((s) => { return s })}`)
        // if (relayStates[index] !== on) {
        // console.log(`states ${relayStates.map((s)=>{ return s ? "1" : "0"})}`)
        console.log(`switching ${on ? "on" : "off"} relay ${index}`)

        setRelayStates(prevStates => {
            // console.log(`--> p states ${prevStates.map((s) => { return s })}`)
            const n = prevStates.map((item, i) => (i === index ? on : item))
            // console.log(`--> n states ${n.map((s) => { return s })}`)
            return n
        })
        // }

        await switchRelay(on ? 0xFF : 0xFD, index + 1)

        if (on && duration) {
            const newRT = [...relayTimers]
            newRT[index] = setTimeout(() => {
                toggle(false, index)
            }, duration)
            // setRelayTimers(newRT)
        }

        // setRelayStates([...relayStates_])

    }


    return (
        <RelayContext.Provider value={{ deviceInfo, toggle, reset, openDevice, closeDevice, relayStates }}>
            {children}
        </RelayContext.Provider>
    )
}


const useRelay = () => {
    return useContext(RelayContext)
}

export { useRelay, RelayProvider }

