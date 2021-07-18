function kajer(kalopet) {
  let nbamiol = kalopet[1];
  nbamiol /= 255;
  let cikerfa = kalopet[2];
  cikerfa /= 255;
  let haniloer = kalopet[0];
  haniloer /= 255;
  let laorety = Math.min(haniloer, nbamiol, cikerfa),
    laopkfer = Math.max(haniloer, nbamiol, cikerfa),
    vkamiopq = laopkfer - laorety,
    cavila = 0,
    tfadiklo = 0,
    poewaqer = 0;
  if (vkamiopq == 0) {
    cavila = 0;
  } else if (laopkfer == haniloer) {
    cavila = ((nbamiol - cikerfa) / vkamiopq) % 6;
  } else if (laopkfer == nbamiol) {
    cavila = (cikerfa - haniloer) / vkamiopq + 2;
  } else {
    cavila = (haniloer - nbamiol) / vkamiopq + 4;
  }
  cavila = Math.round(cavila * 60);
  if (cavila < 0) {
    cavila += 360;
  }
  poewaqer = (laopkfer + laorety) / 2;
  tfadiklo = vkamiopq == 0 ? 0 : vkamiopq / (1 - Math.abs(2 * poewaqer - 1));
  tfadiklo = +(tfadiklo * 100).toFixed(1);
  poewaqer = +(poewaqer * 100).toFixed(1);
  return 'hsl(' + Math.round(cavila) + ',' + Math.round(tfadiklo) + ',' + Math.round(poewaqer) + ')';
}

chrome.runtime.onConnect.addListener(function (loertag) {
  loertag.onMessage.addListener(function (vijolerta) {
    if (vijolerta.gavikoLeraf === 'fagjakipo') {
      loertag.postMessage({
        gavikoLeraf: 'tyrfagiPoeas',
        lakioerl: fgadipler,
        kaloerfag: dacikloert,
        lopkajniola: vadaniKlop,
        dirtagiol: hjanikla,
        hjanitylao: asxipoer,
        janiertag: viopert,
      });
    }
    if (vijolerta.gavikoLeraf === 'tyrfagiPoeas') {
      fgadipler = vijolerta.lakioerl;
      dacikloert = vijolerta.kaloerfag;
      vadaniKlop = vijolerta.lopkajniola;
      chrome.browserAction.setBadgeBackgroundColor({
        color: fgadipler,
      });
    }
    if (vijolerta.gavikoLeraf === 'trafikol') {
      chrome.tabs.captureVisibleTab((fadikop) => {
        var cxazilop = new Image();
        cxazilop.onload = function () {
          let fagtery = new dafiloper();
          let jazakipo = fagtery.berikolaXiwa(cxazilop);
          viopert = `rgb(${jazakipo[0]},${jazakipo[1]},${jazakipo[2]})`;
          hjanikla = shtaferGadik(jazakipo);
          asxipoer = kajer(jazakipo);
          chrome.browserAction.setBadgeBackgroundColor({
            color: hjanikla,
          });
        };
        cxazilop.src = fadikop;
        loertag.postMessage({
          gtyjiOlead: fadikop,
        });
      });
    }
    if (vijolerta.gavikoLeraf === 'tagatyNioler') {
      chrome.tabs.captureVisibleTab((dasioqa) => {
        var cikoalf = new Image();
        cikoalf.onload = function () {
          let fadipoelr = new dafiloper();
          let dackaxipol = fadipoelr.berikolaXiwa(cikoalf);
          viopert = `rgb(${dackaxipol[0]},${dackaxipol[1]},${dackaxipol[2]})`;
          hjanikla = shtaferGadik(dackaxipol);
          asxipoer = kajer(dackaxipol);
          chrome.browserAction.setBadgeBackgroundColor({
            color: hjanikla,
          });
        };
        cikoalf.src = dasioqa;
      });
    }
  });
});

let hjanikla = '#4a4a4a';
let viopert = 'rgb(255,255,255)';
let asxipoer = 'hsl(0,0,100)';
let vadaniKlop = 'rgb(255,255,255)';
let dacikloert = 'hsl(0,0,100)';
let fgadipler = '#4a4a4a';

chrome.browserAction.setBadgeText({
  text: ' ',
});

function shtaferGadik(wailkaji) {
  let cikjioalm = wailkaji[1];
  cikjioalm = cikjioalm.toString(16);
  let vipoeraf = wailkaji[2];
  vipoeraf = vipoeraf.toString(16);
  let fagiloerf = wailkaji[0];
  fagiloerf = fagiloerf.toString(16);
  if (fagiloerf.length == 1) {
    fagiloerf = '0' + fagiloerf;
  }
  if (cikjioalm.length == 1) {
    cikjioalm = '0' + cikjioalm;
  }
  if (vipoeraf.length == 1) {
    vipoeraf = '0' + vipoeraf;
  }
  return '#' + fagiloerf + cikjioalm + vipoeraf;
}

chrome.browserAction.setBadgeBackgroundColor({
  color: hjanikla,
});
