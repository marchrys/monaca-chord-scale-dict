const notes = [
   {
     id: 1,
     name: {
       en: 'C',
       fr: 'Do',
     },
     isRoot: true,
     sound: 'C4'
   },
   {
     id: 3,
     name: {
       en: 'C#',
       fr: 'Do#',
     },
     isRoot: true,
     sound: Db4
   },
   {
     id: 4,
     name: {
       en: 'Db',
       fr: 'Réb',
     },
     isRoot: true,
     sound: Db4
   },
   {
     id: 6,
     name: {
       en: 'D',
       fr: 'Ré',
     },
     isRoot: true,
     sound: D4
   },
   {
     id: 8,
     name: {
       en: 'D#',
       fr: 'Ré#',
     },
     isRoot: true,
     sound: Eb4
   },
   {
     id: 9,
     name: {
       en: 'Eb',
       fr: 'Mib',
     },
     isRoot: true,
     sound: Eb4
   },
   {
     id: 11,
     name: {
       en: 'E',
       fr: 'Mi',
     },
     isRoot: true,
     sound: E4
   },
   {
     id: 12,
     name: {
       en: 'Fb',
       fr: 'Fab',
     },
     isRoot: false,
     sound: E4
   },
   {
     id: 13,
     name: {
       en: 'E#',
       fr: 'Mi#',
     },
     isRoot: false,
     sound: F4
   },
   {
     id: 14,
     name: {
       en: 'F',
       fr: 'Fa',
     },
     isRoot: true,
     sound: F4
   },
   {
     id: 16,
     name: {
       en: 'F#',
       fr: 'Fa#',
     },
     isRoot: true,
     sound: Gb4
   },
   {
     id: 17,
     name: {
       en: 'Gb',
       fr: 'Solb',
     },
     isRoot: true,
     sound: Gb4
   },
   {
     id: 19,
     name: {
       en: 'G',
       fr: 'Sol',
     },
     isRoot: true,
     sound: G4
   },
   {
     id: 21,
     name: {
       en: 'G#',
       fr: 'Sol#',
     },
     isRoot: true,
     sound: Ab4
   },
   {
     id: 22,
     name: {
       en: 'Ab',
       fr: 'Lab',
     },
     isRoot: true,
     sound: Ab4
   },
   {
     id: 24,
     name: {
       en: 'A',
       fr: 'La',
     },
     isRoot: true,
     sound: A4
   },
   {
     id: 26,
     name: {
       en: 'A#',
       fr: 'La#',
     },
     isRoot: true,
     sound: Bb4
   },
   {
     id: 27,
     name: {
       en: 'Bb',
       fr: 'Sib',
     },
     isRoot: true,
     sound: Bb4
   },
   {
     id: 29,
     name: {
       en: 'B',
       fr: 'Si',
     },
     isRoot: true,
     sound: B4
   },
   {
     id: 30,
     name: {
       en: 'Cb',
       fr: 'Dob',
     },
     isRoot: false,
     sound: B4
   },
   {
     id: 31,
     name: {
       en: 'B#',
       fr: 'Si#',
     },
     isRoot: false,
     sound: C5
   },

   {
     id: 32,
     name: {
       en: 'C',
       fr: 'Do',
     },
     isRoot: false,
     sound: C5
   },
   {
     id: 34,
     name: {
       en: 'C#',
       fr: 'Do#',
     },
     isRoot: false,
     sound: Db5
   },
   {
     id: 35,
     name: {
       en: 'Db',
       fr: 'Réb',
     },
     isRoot: false,
     sound: Db5
   },
   {
     id: 37,
     name: {
       en: 'D',
       fr: 'Ré',
     },
     isRoot: false,
     sound: D5
   },
   {
     id: 39,
     name: {
       en: 'D#',
       fr: 'Ré#',
     },
     isRoot: false,
     sound: Eb5
   },
   {
     id: 40,
     name: {
       en: 'Eb',
       fr: 'Mib',
     },
     isRoot: false,
     sound: Eb5
   },
   {
     id: 42,
     name: {
       en: 'E',
       fr: 'Mi',
     },
     isRoot: false,
     sound: E5
   },
   {
     id: 43,
     name: {
       en: 'Fb',
       fr: 'Fab',
     },
     isRoot: false,
     sound: E5
   },
   {
     id: 44,
     name: {
       en: 'E#',
       fr: 'Mi#',
     },
     isRoot: false,
     sound: F5
   },
   {
     id: 45,
     name: {
       en: 'F',
       fr: 'Fa',
     },
     isRoot: false,
     sound: F5
   },
   {
     id: 47,
     name: {
       en: 'F#',
       fr: 'Fa#',
     },
     isRoot: false,
     sound: Gb5
   },
   {
     id: 48,
     name: {
       en: 'Gb',
       fr: 'Solb',
     },
     isRoot: false,
     sound: Gb5
   },
   {
     id: 50,
     name: {
       en: 'G',
       fr: 'Sol',
     },
     isRoot: false,
     sound: G5
   },
   {
     id: 52,
     name: {
       en: 'G#',
       fr: 'Sol#',
     },
     isRoot: false,
     sound: Ab5
   },
   {
     id: 53,
     name: {
       en: 'Ab',
       fr: 'Lab',
     },
     isRoot: false,
     sound: Ab5
   },
   {
     id: 55,
     name: {
       en: 'A',
       fr: 'La',
     },
     isRoot: false,
     sound: A5
   },
   {
     id: 57,
     name: {
       en: 'A#',
       fr: 'La#',
     },
     isRoot: false,
     sound: Bb5
   },
   {
     id: 58,
     name: {
       en: 'Bb',
       fr: 'Sib',
     },
     isRoot: false,
     sound: Bb5
   },
   {
     id: 60,
     name: {
       en: 'B',
       fr: 'Si',
     },
     isRoot: false,
     sound: B5
   },
   {
     id: 61,
     name: {
       en: 'Cb',
       fr: 'Dob',
     },
     isRoot: false,
     sound: B5
   },
];

 
