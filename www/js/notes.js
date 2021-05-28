const notes = [
   {
     id: 1,
     name: {
       en: 'C',
       fr: 'Do',
     },
     isRoot: true
   },
   {
     id: 3,
     name: {
       en: 'C#',
       fr: 'Do#',
     },
     isRoot: true
   },
   {
     id: 4,
     name: {
       en: 'Db',
       fr: 'Réb',
     },
     isRoot: true
   },
   {
     id: 6,
     name: {
       en: 'D',
       fr: 'Ré',
     },
     isRoot: true
   },
   {
     id: 8,
     name: {
       en: 'D#',
       fr: 'Ré#',
     },
     isRoot: true
   },
   {
     id: 9,
     name: {
       en: 'Eb',
       fr: 'Mib',
     },
     isRoot: true
   },
   {
     id: 11,
     name: {
       en: 'E',
       fr: 'Mi',
     },
     isRoot: true
   },
   {
     id: 12,
     name: {
       en: 'Fb',
       fr: 'Fab',
     },
     isRoot: false
   },
   {
     id: 13,
     name: {
       en: 'E#',
       fr: 'Mi#',
     },
     isRoot: false
   },
   {
     id: 14,
     name: {
       en: 'F',
       fr: 'Fa',
     },
     isRoot: true
   },
   {
     id: 16,
     name: {
       en: 'F#',
       fr: 'Fa#',
     },
     isRoot: true
   },
   {
     id: 17,
     name: {
       en: 'Gb',
       fr: 'Solb',
     },
     isRoot: true
   },
   {
     id: 19,
     name: {
       en: 'G',
       fr: 'Sol',
     },
     isRoot: true
   },
   {
     id: 21,
     name: {
       en: 'G#',
       fr: 'Sol#',
     },
     isRoot: true
   },
   {
     id: 22,
     name: {
       en: 'Ab',
       fr: 'Lab',
     },
     isRoot: true
   },
   {
     id: 24,
     name: {
       en: 'A',
       fr: 'La',
     },
     isRoot: true
   },
   {
     id: 26,
     name: {
       en: 'A#',
       fr: 'La#',
     },
     isRoot: true
   },
   {
     id: 27,
     name: {
       en: 'Bb',
       fr: 'Sib',
     },
     isRoot: true
   },
   {
     id: 29,
     name: {
       en: 'B',
       fr: 'Si',
     },
     isRoot: true
   },
   {
     id: 30,
     name: {
       en: 'Cb',
       fr: 'Dob',
     },
     isRoot: false
   },
   {
     id: 31,
     name: {
       en: 'B#',
       fr: 'Si#',
     },
     isRoot: false
   },
];

notes.forEach(function(note) {
  notes.push(
    {
      id: note.id + 31,
      name: {
        en: note.name.en,
        fr: note.name.fr
      },
      isRoot: false
    }
  );
});
