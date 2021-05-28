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

    this.tonicSelect = this.containerDiv.querySelector('.tonic-select');
    this.typeSelect = this.containerDiv.querySelector('.type-select');
    this.notesDiv = this.containerDiv.querySelector('.notes-text');

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

    this.loadData();

    // On sélectionne l'option correspondante pour les deux select
    this.tonicSelect.value = this.selectedRoot.id;
    this.typeSelect.value = this.selectedType.id;

    this.createElementNotes();

    this.initSelects();

    // On ajouter des event listeners pour le change sur les deux selects
    this.tonicSelect.addEventListener('change', this.handleRootChange.bind(this));
    this.typeSelect.addEventListener('change', this.handleTypeChange.bind(this));
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
    } else {
      this.elementNotes.forEach(function(note) {
        this.notesStr += note.name[this.lang] + ' ';
      }.bind(this));
      this.notesStr = this.notesStr.substring(0, this.notesStr.length-1);
    }
    
    if(hasErrors) {
      this.notesDiv.style.color = 'red';
    } else {
      this.notesDiv.style.color = 'black';
    }
    this.notesDiv.innerHTML = this.notesStr;
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
}

