function gafurtna(dasikloerp) {
  let jutrafki = dasikloerp[1];
  jutrafki /= 255;
  let fdagitre = dasikloerp[2];
  fdagitre /= 255;
  let vijakoler = dasikloerp[0];
  vijakoler /= 255;
  let cikazie = Math.min(vijakoler, jutrafki, fdagitre),
    olpaer = Math.max(vijakoler, jutrafki, fdagitre),
    vikjazipol = olpaer - cikazie,
    vikjaerta = 0,
    qwaertagi = 0,
    vilkaziret = 0;
  if (vikjazipol == 0) {
    vikjaerta = 0;
  } else if (olpaer == vijakoler) {
    vikjaerta = ((jutrafki - fdagitre) / vikjazipol) % 6;
  } else if (olpaer == jutrafki) {
    vikjaerta = (fdagitre - vijakoler) / vikjazipol + 2;
  } else {
    vikjaerta = (vijakoler - jutrafki) / vikjazipol + 4;
  }
  vikjaerta = Math.round(vikjaerta * 60);
  if (vikjaerta < 0) {
    vikjaerta += 360;
  }
  vilkaziret = (olpaer + cikazie) / 2;
  qwaertagi = vikjazipol == 0 ? 0 : vikjazipol / (1 - Math.abs(2 * vilkaziret - 1));
  qwaertagi = +(qwaertagi * 100).toFixed(1);
  vilkaziret = +(vilkaziret * 100).toFixed(1);
  return 'hsl(' + Math.round(vikjaerta) + ',' + Math.round(qwaertagi) + ',' + Math.round(vilkaziret) + ')';
}

function ghtylope(cafiret) {
  let dafikoler = cafiret[2];
  dafikoler = dafikoler.toString(16);
  let paierl = cafiret[1];
  paierl = paierl.toString(16);
  let ercialor = cafiret[0];
  ercialor = ercialor.toString(16);
  if (ercialor.length == 1) {
    ercialor = '0' + ercialor;
  }
  if (paierl.length == 1) {
    paierl = '0' + paierl;
  }
  if (dafikoler.length == 1) {
    dafikoler = '0' + dafikoler;
  }
  return '#' + ercialor + paierl + dafikoler;
}

let frtagiek = document.createElement('div');
let dirtagikol = document.createElement('div');
let fgertaf = document.createElement('div');
let lopewas = document.createElement('div');
let vioasf = document.createElement('canvas');
let poifagiTryna = document.documentElement.scrollTop;
let qapolika = document.createElement('div');
let vimolakji = document.createElement('div');
let vijamola = document.createElement('div');
vijamola.className = 'fgabityh';
lopewas.className = 'raditynka';
fgertaf.className = 'ewaXikola';
vimolakji.className = 'rtagikoler';
dirtagikol.className = 'erfagipoqwas';
frtagiek.className = 'bmacierfa';
fgertaf.className = 'rtagikol';
vijamola.appendChild(lopewas);
vimolakji.appendChild(fgertaf);
vimolakji.appendChild(qapolika);
vijamola.appendChild(vimolakji);
let filasrf = vioasf.getContext('2d');
const refiplaeo = chrome.runtime.connect({
  name: 'vikoler',
});
let qwapiola = window.innerHeight;
let birtagil = '';
let vilasre = window.innerWidth;
vioasf.width = vilasre;
let fagilope = '';
vioasf.height = qwapiola;
let cikamcoa = '';
const {body} = document;

refiplaeo.onMessage.addListener(function (ferdatyniol) {
  poifagiTryna = document.documentElement.scrollTop;
  var adiplav = new Image();
  adiplav.onload = function () {
    filasrf.drawImage(adiplav, 0, 0, vilasre, qwapiola);
  };
  adiplav.src = ferdatyniol.gtyjiOlead;
  body.appendChild(frtagiek);
  body.appendChild(vijamola);
  body.appendChild(dirtagikol);
  frtagiek.style.visibility = 'visible';
  vijamola.style.visibility = 'visible';
  dirtagikol.style.visibility = 'visible';
  dafikoler();

  dirtagikol.addEventListener('click', (dasikol) => {
    let davilpak = dasikol.clientX;
    let eradipol = dasikol.clientY;
    frtagiek.style.visibility = 'hidden';
    vijamola.style.visibility = 'hidden';
    dirtagikol.style.visibility = 'hidden';
    refiplaeo.postMessage({
      gavikoLeraf: 'tyrfagiPoeas',
      lakioerl: birtagil,
      kaloerfag: fagilope,
      lopkajniola: cikamcoa,
    });
    ikaciLopea();
  });
});

refiplaeo.postMessage({
  gavikoLeraf: 'tagatyNioler',
});

window.addEventListener('mousemove', (fagiler) => {
  let cikalopera = fagiler.clientY;
  let daliopma = fagiler.clientX;
  dirtagikol.style.left = `${daliopma - 50}px`;
  dirtagikol.style.top = `${cikalopera - 50}px`;
  let diplvaboika = filasrf.getImageData(daliopma, cikalopera + document.documentElement.scrollTop - poifagiTryna, 1, 1).data;
  fagilope = `${gafurtna(diplvaboika)}`;
  birtagil = `${ghtylope(diplvaboika)}`;
  cikamcoa = `rgb(${diplvaboika[0]},${diplvaboika[1]},${diplvaboika[2]})`;
  qapolika.innerText = `rgb(${diplvaboika[0]},${diplvaboika[1]},${diplvaboika[2]})`;
  fgertaf.innerText = birtagil;
  frtagiek.style.top = `${cikalopera}px`;
  frtagiek.style.left = `${daliopma + 10}px`;
  lopewas.style.backgroundColor = birtagil;
  frtagiek.style.backgroundColor = birtagil;
});

chrome.runtime.onMessage.addListener(
  function (fagioler, cikamiol, polaczaxil) {
    if (fagioler.tragiloerp == 'gahikjiol') {
      refiplaeo.postMessage({
        gavikoLeraf: 'trafikol',
      });
      polaczaxil('hurtafierda.js');
    } else if (fagioler.tragiloerp === 'fiplaerPolak') {
      window.addEventListener('resize', function () {
        qwapiola = window.innerHeight;
        vilasre = window.innerWidth;
        refiplaeo.postMessage({
          gavikoLeraf: 'trafikol',
        });
      });
    }
  },
);

function ikaciLopea() {
  var firadsPoer = false;
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function () {
        firadsPoer = true;
      },
    }));
  } catch (dasli) {
  }
  var dacikmol = firadsPoer ? {
    passive: false,
  } : false;
  var dsazilop = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  window.removeEventListener(dsazilop, plaerbiol, dacikmol);
  window.removeEventListener('DOMMouseScroll', plaerbiol, false);
}

function dafikoler() {
  var dasilka = false;
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function () {
        dasilka = true;
      },
    }));
  } catch (trafilop) {
  }

  var vikjam = dasilka ? {
    passive: false,
  } : false;
  var aswaqert = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  window.addEventListener(aswaqert, plaerbiol, vikjam);
  window.addEventListener('DOMMouseScroll', plaerbiol, false);
}

function plaerbiol(qlopitraf) {
  qlopitraf.preventDefault();
}
