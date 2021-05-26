class Dictionary {
  constructor(data, lang) {
    this.data = data;
    this.lang = lang;

    this.containerDiv = document.getElementById(this.data.containerDiv);
    
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

    this.tonicSelect = this.containerDiv.querySelector('.tonic-select');
    this.typeSelect = this.containerDiv.querySelector('.type-select');

    // On ajoute les notes au select
    notes.forEach(function(note) {
      if(note.isRoot) {
        let option = document.createElement('option');
        option.innerHTML = note.name[this.lang];
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

    this.initSelects();
  }

  initSelects() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
  }
}

