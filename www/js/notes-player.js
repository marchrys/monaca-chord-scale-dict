// class Rhythmplayer{
//     constructor(soundUrl){
//         this.context = '';
//         this.bufferLoader = '';
//         this.startTime = 0.1;

//         // Fix up prefixing
//         window.AudioContext = window.AudioContext || window.webkitAudioContext;
//         this.context = new AudioContext();
    
//         this.bufferLoader = new BufferLoader(
//         this.context,
//         [
//             soundUrl
//         ],
//         this.finishedLoading
//         );
    
//         this.bufferLoader.load();
//     }

//     finishedLoading(bufferList) {
//         this.kick = bufferList[0];
//     }

//     playSound(buffer, time) {
//         var source = this.context.createBufferSource();
//         source.buffer = buffer;
//         source.connect(this.context.destination);
//         source.start(this.startTime + time);
//     }

//       playPhrase(phraseDurations){
//           var notesTiming = [];
//           notesTiming.push(this.startTime);
//           for(var i=0; i<phraseDurations.length-1; i++){
//               notesTiming.push(notesTiming[i] + phraseDurations[i]);
//           }
            
//           notesTiming.forEach((item, index) => {
//               this.playSound(this.kick, item);
//           });
//       }
// }

var C4, E4, G4;
var soundNoteNames = ['C4', 'E4', 'G4'];
const sounds = [];

soundNoteNames.forEach(function(soundNoteName) {
  sounds.push('sounds/' + soundNoteName + '.mp3');
});

var context; 
var bufferLoader;
var startTime = 0.1;

function initSounds() {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  
    bufferLoader = new BufferLoader(
      context,
      sounds,
      finishedLoadingSound
      );
  
    bufferLoader.load();
}
  
function finishedLoadingSound(bufferList) {
    // soundNotes.forEach(function(soundNote, index) {
    //   soundNote = bufferList[index];
    // });

    C4 = bufferList[0];
    E4 = bufferList[1];
    G4 = bufferList[2];
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(context.currentTime + time);
}

function playPhrase(phraseDurations){
    var notesTiming = [];
    notesTiming.push(startTime);
    for(var i=0; i<phraseDurations.length-1; i++){
        notesTiming.push(notesTiming[i] + phraseDurations[i]);
    }
      
    notesTiming.forEach((item, index) => {
        playSound(piano, item);
    })
}

 

 
  
  

  

