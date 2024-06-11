const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1',
        noteCount: 16,
        trackList: [
            {
                title: 'Kop links',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Kop rechts',
                soundFile: 'snare',
                onNotes: [2, 6, 10, 14],
            },
            {
                title: 'Mond Open',
                soundFile: 'hh_open',
                onNotes: [5],
            },
            {
                title: 'Mond Dicht',
                soundFile: 'hh_closed',
                onNotes: [11],
            },
            {
                title: 'AUX 1',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 2',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 3',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 4',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 1,
        title: 'Sequence 2',
        noteCount: 16,
        trackList: [
            {
                title: 'Kop links',
                soundFile: 'kick',
                onNotes: [0, 2,4,6,8,10,12,14],
            },
            {
                title: 'Kop rechts',
                soundFile: 'snare',
                onNotes: [1,3,5,7,9,11,13,15],
            },
            {
                title: 'Mond Open',
                soundFile: 'hh_open',
                onNotes: [5],
            },
            {
                title: 'Mond Dicht',
                soundFile: 'hh_closed',
                onNotes: [11],
            },
            {
                title: 'AUX 1',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 2',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 3',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'AUX 4',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    }    
]

const soundFiles = {
    'kick': '/sounds/kick.wav',
    'snare': '/sounds/snare.wav',
    'hh_open': '/sounds/hh_open.wav',
    'hh_closed': '/sounds/hh_closed.wav'
}

export { sequenceList, soundFiles }
