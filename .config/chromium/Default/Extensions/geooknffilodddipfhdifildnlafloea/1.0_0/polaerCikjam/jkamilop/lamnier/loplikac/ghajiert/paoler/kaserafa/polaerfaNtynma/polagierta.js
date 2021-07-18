const gafikol = chrome.runtime.connect({
  name: 'vikoler',
});

gafikol.onMessage.addListener(function (fdertynoal) {
  if (fdertynoal.gavikoLeraf === 'tyrfagiPoeas') {
    let dafiloerp = document.getElementById('tragiulak');
    let dacikmolaz = document.getElementById('rediplamik');
    let qapolzdert = document.getElementById('redzasipol');
    let fadipler = document.getElementById('paliomer');
    let dafipotr = {
      lakioerl: fdertynoal.lakioerl,
      kaloerfag: fdertynoal.kaloerfag,
      lopkajniola: fdertynoal.lopkajniola,
    };
    chrome.storage.local.set(dafipotr, function () {
      chrome.storage.local.get(null, function (paoler) {
        //picked color
        fadipler.style.backgroundColor = paoler.lakioerl;
        qapolzdert.innerText = paoler.lakioerl;
        dafiloerp.innerText = paoler.kaloerfag;
        dacikmolaz.innerText = paoler.lopkajniola;
      });
    });
    //dominant color
    let daerfltr = document.getElementById('reafiol');
    let dafiolerp = document.getElementById('ewaiola');
    let gfanikoler = document.getElementById('poqaziklaPortagi');
    let dilaoer = document.getElementById('esakiNoitaf');
    daerfltr.innerText = fdertynoal.dirtagiol;
    dafiolerp.innerText = fdertynoal.janiertag;
    gfanikoler.innerText = fdertynoal.hjanitylao;
    dilaoer.style.backgroundColor = fdertynoal.dirtagiol;
  }
});

chrome.tabs.query({active: true, currentWindow: true}, function (faderp) {
  function fadert() {
    chrome.tabs.sendMessage(faderp[0].id, {tragiloerp: 'fiplaerPolak'}, function (fitranipla) {
      if (chrome.runtime.lastError) {
        setTimeout(fadert, 1000);
      } else {
        //DO NOTHING
      }
    });
  }
  fadert();
});

chrome.tabs.query({active: true, currentWindow: true}, function (diopla) {
  function gahikjiol() {
    chrome.tabs.sendMessage(diopla[0].id, {
      tragiloerp: 'gahikjiol',
    }, (dasiplert) => {
      if (chrome.runtime.lastError) {
        setTimeout(gahikjiol, 1000);
      } else {
        //DO NOTHING
      }
    });
  }
  gahikjiol();
});

gafikol.postMessage({
  gavikoLeraf: 'fagjakipo',
});
