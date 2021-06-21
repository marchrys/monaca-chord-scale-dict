class Dictionary {
  constructor(data, lang) {
    this.data = data;
    this.lang = lang;

    this.containerDiv = document.getElementById(this.data.containerDiv);
    this.selectedRoot = notes[0];
    this.selectedType = this.data.types[0];
    this.elementNotes = [];

    this.notesStr = '';

    // On définit les clés pour le local storage
    this.rootKey = this.data.containerDiv + '-root';
    this.typeKey = this.data.containerDiv + '-type';
    
    // this.createGui();
    this.containerDiv.innerHTML += 
        '<div>' + texts.preloader[this.lang] + '</div>' +
        '<div class="progress">' +
          '<div class="indeterminate"></div>' +
        '</div>';

    this.loadData();
    this.checkSoundsLoad();
  }

  initSelects() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
  }

  handleRootChange() {
    this.selectedRoot = notes.find(note => note.id == this.tonicSelect.value);
    this.saveData();
    this.createElementNotes();
  }

  handleTypeChange() {
    this.selectedType = this.data.types.find(type => type.id == this.typeSelect.value);
    this.saveData();
    this.createElementNotes();
  }

  createElementNotes() {
    this.elementNotes = [];

    this.elementNotes.push(this.selectedRoot);
    this.selectedType.intervals.forEach(function(interval) {
      const note = notes.find(note => note.id == this.selectedRoot.id + interval);
      this.elementNotes.push(note);
    }.bind(this));
    if(this.data.containerDiv == 'scales-dict') {
      const octava = notes.find(note => note.id == this.selectedRoot.id + 31);
      this.elementNotes.push(octava);
    }

    let hasErrors = false;
    this.elementNotes.every(function(note) {
      if(note == null) {
        hasErrors = true;
        return false;
      } else {
        return true;
      }
    }.bind(this));

    this.notesStr = '';
    if(hasErrors) {
      this.notesStr = this.data.errorText[this.lang];
      this.playBtn.style.display = 'none';
    } else {
      this.elementNotes.forEach(function(note) {
        this.notesStr += note.name[this.lang] + ' ';
      }.bind(this));
      this.notesStr = this.notesStr.substring(0, this.notesStr.length-1);
      if(this.playBtn !== undefined) {
        this.playBtn.style.display = 'inline-block';
      }
    }
    if(this.notesDiv !== undefined) {
      if(hasErrors) {
        this.notesDiv.style.color = 'red';
      } else {
        this.notesDiv.style.color = 'black';
      }
      this.notesDiv.innerHTML = this.notesStr;
    }
  }

  playElement() {
    const sounds = [
      null, C4, null, Db4, Db4, null, D4, null, Eb4, Eb4, null, E4, E4, F4, F4, null, 
      Gb4, Gb4, null, G4, null, Ab4, Ab4, null, A4, null, Bb4, Bb4, null, B4, B4, C5,
      C5, null, Db5, Db5, null, D5, null, Eb5, Eb5, null, E5, E5, F5, F5, null,
      Gb5, Gb5, null, G5, null, Ab5, Ab5, null, A5, null, Bb5, Bb5, null, B5, B5
    ];
    
    let soundsToPlay = [];
    this.elementNotes.forEach(function(note) {
      soundsToPlay.push(sounds[note.id]);
    }.bind(this));
  
    soundsToPlay.forEach(function(sound, index) {
      if(this.data.containerDiv == 'chords-dict') {
        playSound(sound, 0);
      } else {
        playSound(sound, index);
      }
    }.bind(this));
  }

  saveData() {
    localStorage.setItem(this.rootKey, JSON.stringify(this.selectedRoot));
    localStorage.setItem(this.typeKey, JSON.stringify(this.selectedType));
  }

  loadData() {
    if (localStorage.getItem(this.rootKey) !== null) {
      this.selectedRoot = JSON.parse(localStorage.getItem(this.rootKey));
    }

    if (localStorage.getItem(this.typeKey) !== null) {
      this.selectedType = JSON.parse(localStorage.getItem(this.typeKey));
    }
  }

  checkSoundsLoad() {
    const soundsLoad = setInterval(function() {
      if(allSoundsLoaded) {
        this.createGui();
        this.createElementNotes();
        this.setSelectedOptions();
        this.initSelects();
        clearInterval(soundsLoad);
        return;
      }
    }.bind(this), 1000);
  }

  createGui() {
    this.containerDiv.innerHTML = '';
     // On ajoute le select de choix de fondamentale ou tonique
    this.containerDiv.innerHTML += 
        '<div class="input-field col s12">' +
          '<select class="tonic-select"></select>' +
          '<label>' + this.data.tonicText[this.lang] + '</label>' +
        '</div>';
    // On ajoute le select de choix de type
    this.containerDiv.innerHTML += 
        '<div class="input-field col s12">' +
          '<select class="type-select"></select>' +
          '<label>' + this.data.typeText[this.lang] + '</label>' +
        '</div>';
    
    // On ajoute la p qui affichera les notes
    this.containerDiv.innerHTML += 
      '<p class="notes-text">test</p>';

    // On ajoute le bouton qui sert à jouer l'accord ou la gamme
    this.containerDiv.innerHTML += 
      '<a class="waves-effect waves-light btn play-btn"><i class="fas fa-play"></i> Jouer</a>';

    this.tonicSelect = this.containerDiv.querySelector('.tonic-select');
    this.typeSelect = this.containerDiv.querySelector('.type-select');
    this.notesDiv = this.containerDiv.querySelector('.notes-text');
    this.playBtn = this.containerDiv.querySelector('.play-btn');

    // On ajoute les notes au select
    notes.forEach(function(note) {
      if(note.isRoot) {
        let option = document.createElement('option');
        if(this.data.containerDiv === 'chords-dict') {
          option.innerHTML = note.name.en;
        } else {
          option.innerHTML = note.name[this.lang];
        }
        
        option.value = note.id;
        this.tonicSelect.appendChild(option);
      }
    }.bind(this));

    // On classe les types par ordre alphabétique du nom de type dans la langue de l'appareil
    this.data.types.sort((a,b) => (a.name[this.lang] > b.name[this.lang]) ? 1 : ((b.name[this.lang] > a.name[this.lang]) ? -1 : 0));

    // On ajouter les types au select de type
    this.data.types.forEach(function(type) {
        let option = document.createElement('option');
        option.innerHTML = type.name[this.lang];
        option.value = type.id;
        this.typeSelect.appendChild(option);
    }.bind(this));

    this.tonicSelect.addEventListener('change', this.handleRootChange.bind(this));
    this.typeSelect.addEventListener('change', this.handleTypeChange.bind(this));

    this.playBtn.addEventListener('click', this.playElement.bind(this));
  }

  setSelectedOptions() {
    // On sélectionne l'option correspondante pour les deux select
    this.tonicSelect.value = this.selectedRoot.id;
    this.typeSelect.value = this.selectedType.id;
  }
 
}

