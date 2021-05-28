// This is a JavaScript file

const dictionaries = [
  {
    name: {
      fr: 'Accords',
      en: 'Chords'
    },
    containerDiv: 'chords-dict',
    tonicText: {
      fr: 'Fondamentale',
    },
    typeText: {
      fr: 'Type d\'accord'
    },
    types: chordTypes,
    errorText: {
      en: '<i class="fas fa-exclamation-triangle"></i> This chord has double accidentals, but our application desn\'t use them, for the sake of simplicity.',
      fr: '<i class="fas fa-exclamation-triangle"></i> Cet accord a des doubles altérations, mais notre application ne les utilise pas, dans un souci de simplicité.'
    }
  },
  {
    name: {
      fr: 'Gammes',
      en: 'Scales'
    },
    containerDiv: 'scales-dict',
    tonicText: {
      fr: 'Tonique',
    },
    typeText: {
      fr: 'Type de gamme'
    },
    types: scaleTypes,
    errorText: {
      en: '<i class="fas fa-exclamation-triangle"></i> This scale has double accidentals, but our application desn\'t use them, for the sake of simplicity.',
      fr: '<i class="fas fa-exclamation-triangle"></i> Cette gamme a des doubles altérations, mais notre application ne les utilise pas, dans un souci de simplicité.'
    }
  },
];