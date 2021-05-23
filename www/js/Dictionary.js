class Dictionary {
  constructor(data, lang) {
    this.containerDiv = document.getElementById(data.containerDiv);
    
    this.containerDiv.innerHTML += 
        '<div class="input-field col s12">' +
          '<select class="tonic-select"></select>' +
          '<label>tonique</label>' +
        '</div>';

    this.tonicSelect = this.containerDiv.querySelector('.tonic-select');

    this.initSelects();
  }

  initSelects() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
  }
}

