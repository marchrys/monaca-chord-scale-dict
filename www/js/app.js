// App module
let app = {
  lang: null,
  init: function(){
        initSounds();

        const langStr = window.navigator.language;

        //On détecte la langue de l'appareil
        if(langStr.substr(0, 2) == 'fr'){
            app.lang = 'fr';
        }
        else{
            app.lang = 'en';
        }

        //On d辿finit le titre de l'appli
        document.getElementById('app-title').textContent = texts.appTitle[app.lang];

        // let clefsArray = null;
        // if(version === 'Lite'){
        //   clefsArray = clefs.filter(clef => clef.inLite);
        // }else{
        //   clefsArray = clefs;
        // }

        dictionaries.forEach(function(dictionary){
            //On ajoute les tabs
            document.getElementById("tabs-container").innerHTML += 
            '<li class="tab">' +
                '<a href="#' + dictionary.containerDiv + '"  id="' + dictionary.containerDiv + '-tab">' + dictionary.name[app.lang] + '</a>' +
            '</li>';

            // On initialize des objets Dictionary
            const dict = new Dictionary(dictionary, app.lang);
        });

        //     let clef = new Clef(dictionary);
        //     // clef.init(item);
        // });

        let elem = document.querySelector('.tabs'); 
        let instance = M.Tabs.init(elem, {});
  }
}

document.addEventListener("deviceready", app.init, false);

