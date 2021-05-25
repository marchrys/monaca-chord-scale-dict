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

    const tonicSelect = this.containerDiv.querySelector('.tonic-select');

    // On ajoute les notes au select
    notes.forEach(function(note) {
      if(note.isRoot) {
        let option = document.createElement('option');
        option.innerHTML = note.name[lang];
        option.value = note.id;
        tonicSelect.appendChild(option);
      }
    });

    this.initSelects();
  }

  initSelects() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
  }
}

