const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1',
        noteCount: 16,
        trackList: [
            {
                title: 'Kop links',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Kop rechts',
                onNotes: [2, 6, 10, 14],
            },
            {
                title: 'Mond Open',
                onNotes: [5],
            },
            {
                title: 'Mond Dicht',
                onNotes: [11],
            },
            {
                title: 'AUX 1',
                relayPulseLength: 100,
                onNotes: [1],
            },
            {
                title: 'AUX 2',
                relayPulseLength: 100,
                onNotes: [2],
            },
            {
                title: 'AUX 3',
                relayPulseLength: 100,
                onNotes: [3],
            },
            {
                title: 'AUX 4',
                relayPulseLength: 100,
                onNotes: [4],
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
                onNotes: [0, 2,4,6,8,10,12,14],
            },
            {
                title: 'Kop rechts',
                onNotes: [1,3,5,7,9,11,13,15],
            },
            {
                title: 'Mond Open',
                onNotes: [5],
            },
            {
                title: 'Mond Dicht',
                onNotes: [11],
            },
            {
                title: 'AUX 1',
                onNotes: [],
            },
            {
                title: 'AUX 2',
                onNotes: [],
            },
            {
                title: 'AUX 3',
                onNotes: [],
            },
            {
                title: 'AUX 4',
                onNotes: [],
            }
        ]
    }    
]

export { sequenceList }
