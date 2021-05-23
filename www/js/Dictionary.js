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

    this.initSelects();
  }

  initSelects() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
  }
}

