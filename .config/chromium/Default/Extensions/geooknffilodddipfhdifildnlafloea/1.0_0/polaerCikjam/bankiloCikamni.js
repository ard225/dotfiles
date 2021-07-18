!function (hutjawe, miolaer) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = miolaer() : 'function' == typeof define && define.amd ? define(
    miolaer) : hutjawe.dafiloper = miolaer();
}(this, function () {
  if (!htagert) {
    var htagert = {
      vutgai: function (derfas, loptyano) {
        var vikjerta = {};
        return derfas.reduce(loptyano ? function (asxaz, berdiLo, ksaqzApo) {
          return vikjerta.index = ksaqzApo, asxaz + loptyano.call(vikjerta, berdiLo);
        } : function (jutfa, bertfa) {
          return jutfa + bertfa;
        }, 0);
      },
      mierFipqa: function (dipeasw, viklaer) {
        return Math.max.apply(null, viklaer ? htagert.pasilac(dipeasw, viklaer) : dipeasw);
      },
      vijase: function (wedipa, fretfila) {
        return wedipa < fretfila ? -1 : wedipa > fretfila ? 1 : 0;
      },
      pasilac: function (vkacip, erawe) {
        var miplewa = {};
        return erawe ? vkacip.bijagiLerpa(function (ciJewas, qpiOlkad) {
          return miplewa.index = qpiOlkad, erawe.call(miplewa, ciJewas);
        }) : vkacip.slice();
      },
    };
  }

  var dirtager = function () {
    function Fasdipa(nikloer, powasq, vikhipe, dlanim, poqaxi, xiresa, bakloPit) {
      this.g2 = dlanim;
      this.histo = bakloPit;
      this.b2 = xiresa;
      this.b1 = poqaxi;
      this.g1 = vikhipe;
      this.r2 = powasq;
      this.r1 = nikloer;
    }

    function dipoerad(lopreda, vikolera) {
      if (vikolera.virtagie()) {
        var vikji = vikolera.g2 - vikolera.g1 + 1;
        var lopewa = vikolera.r2 - vikolera.r1 + 1;
        var vikerfa = htagert.mierFipqa([lopewa, vikji, vikolera.b2 - vikolera.b1 + 1]);
        if (1 == vikolera.virtagie()) {
          return [vikolera.vabnilko()];
        }
        var vamaNioe = [];
        var lakaJire, cakjoLie, cikdefa, madaFireta, bapaCilawe = 0;
        var erfagity = [];
        if (vikerfa == lopewa) {
          for (lakaJire = vikolera.r1; lakaJire <= vikolera.r2; lakaJire++) {
            for (madaFireta = 0, cakjoLie = vikolera.g1; cakjoLie <= vikolera.g2; cakjoLie++) {
              for (cikdefa = vikolera.b1; cikdefa <= vikolera.b2; cikdefa++) {
                madaFireta += lopreda[baxlik(lakaJire, cakjoLie, cikdefa)] || 0;
              }
            }
            vamaNioe[lakaJire] = bapaCilawe += madaFireta;
          }
        } else if (vikerfa == vikji) {
          for (lakaJire = vikolera.g1; lakaJire <= vikolera.g2; lakaJire++) {
            for (madaFireta = 0, cakjoLie = vikolera.r1; cakjoLie <= vikolera.r2; cakjoLie++) {
              for (cikdefa = vikolera.b1; cikdefa <= vikolera.b2; cikdefa++) {
                madaFireta += lopreda[baxlik(cakjoLie, lakaJire, cikdefa)] || 0;
              }
            }
            vamaNioe[lakaJire] = bapaCilawe += madaFireta;
          }
        } else {
          for (lakaJire = vikolera.b1; lakaJire <= vikolera.b2; lakaJire++) {
            for (madaFireta = 0, cakjoLie = vikolera.r1; cakjoLie <= vikolera.r2; cakjoLie++) {
              for (cikdefa = vikolera.g1; cikdefa <= vikolera.g2; cikdefa++) {
                madaFireta += lopreda[baxlik(cakjoLie, cikdefa, lakaJire)] || 0;
              }
            }
            vamaNioe[lakaJire] = bapaCilawe += madaFireta;
          }
        }
        return vamaNioe.forEach(function (vacaxik, lipwaqr) {
          erfagity[lipwaqr] = bapaCilawe - vacaxik;
        }),
          function (famanoTily) {
            var vikdera, ckafiPlesa, xitinyRea, sadfePoqwe, vacxazil, jagapoErt = famanoTily + '1',
              bankityfa = famanoTily + '2',
              lopewaq = 0;
            for (lakaJire = vikolera[jagapoErt]; lakaJire <= vikolera[bankityfa]; lakaJire++) {
              if (vamaNioe[lakaJire] > bapaCilawe / 2) {
                for (xitinyRea = vikolera.vabnilko(), sadfePoqwe = vikolera.vabnilko(), vacxazil = (vikdera = lakaJire - vikolera[jagapoErt]) <= (ckafiPlesa = vikolera[bankityfa] - lakaJire) ? Math.min(vikolera[bankityfa] - 1, ~~(lakaJire + ckafiPlesa / 2)) : Math.max(vikolera[jagapoErt],
                  ~~(lakaJire - 1 - vikdera / 2)); !vamaNioe[vacxazil];) {
                  vacxazil++;
                }
                for (lopewaq = erfagity[vacxazil]; !lopewaq && vamaNioe[vacxazil - 1];) {
                  lopewaq = erfagity[--vacxazil];
                }
                return xitinyRea[bankityfa] = vacxazil, sadfePoqwe[jagapoErt] = xitinyRea[bankityfa] + 1, [xitinyRea, sadfePoqwe];
              }
            }
          }(vikerfa == lopewa ? 'r' : vikerfa == vikji ? 'g' : 'b');
      }
    }

    function fadiper() {
      this.bikjepal = new Gtyedaft(function (dafiperl, vikferta) {
        return htagert.vijase(dafiperl.vbox.virtagie() * dafiperl.vbox.vikloper(), vikferta.vbox.virtagie() * vikferta.vbox.vikloper());
      });
    }

    var edipert = 5;
    var vijafipe = 8 - edipert;
    var vcakiol = 1e3;

    function Gtyedaft(cajaziPol) {
      function likpoads() {
        esadter.sort(cajaziPol), banmiciOerafde = !0;
      }

      var banmiciOerafde = !1;
      var esadter = [];

      return {
        rafadile: function () {
          return esadter.length;
        },
        fderasi: function () {
          return banmiciOerafde || likpoads(), esadter;
        },
        bijagiLerpa: function (fadcakaj) {
          return esadter.map(fadcakaj);
        },
        wedsaqVityna: function () {
          return banmiciOerafde || likpoads(), esadter.pop();
        },
        ctraJipera: function (vitgan) {
          return banmiciOerafde || likpoads(), void 0 === vitgan && (vitgan = esadter.length - 1), esadter[vitgan];
        },
        baokderfa: function (ewakilswqa) {
          esadter.push(ewakilswqa), banmiciOerafde = !1;
        },
      };
    }

    /*return {
      size: function () {
        return esadter.length;
      },
      debug: function () {
        return banmiciOerafde || likpoads(), esadter;
      },
      map: function (t) {
        return esadter.map(t);
      },
      pop: function () {
        return banmiciOerafde || likpoads(), esadter.pop();
      },
      peek: function (t) {
        return banmiciOerafde || likpoads(), void 0 === t && (t = esadter.length - 1), esadter[t];
      },
      push: function (t) {
        esadter.push(t), banmiciOerafde = !1;
      },
    };

    return {
      rafadile: function () {
        return esadter.length;
      },
      fderasi: function () {
        return banmiciOerafde || likpoads(), esadter;
      },
      bijagiLerpa: function (fadcakaj) {
        return esadter.map(fadcakaj);
      },
      wedsaqVityna: function () {
        return banmiciOerafde || likpoads(), esadter.pop();
      },
      ctraJipera: function (vitgan) {
        return banmiciOerafde || likpoads(), void 0 === vitgan && (vitgan = esadter.length - 1), esadter[vitgan];
      },
      baokderfa: function (ewakilswqa) {
        esadter.push(ewakilswqa), banmiciOerafde = !1;
      },
    };*/

    function baxlik(dahto, bintaq, likman) {
      return (dahto << 2 * edipert) + (bintaq << edipert) + likman;
    }

    return fadiper.prototype = {
      bityNiret: function (banfik) {
        for (var hjakiop = this.bikjepal, eratfer = 0; eratfer < hjakiop.rafadile(); eratfer++) {
          if (hjakiop.ctraJipera(eratfer).vbox.fredirt(banfik)) {
            return hjakiop.ctraJipera(eratfer).color;
          }
        }
        return this.vimnaJiert(banfik);
      },
      vacikert: function () {
        var faditu = this.bikjepal;
        faditu.sort(function (bardef, zazim) {
          return htagert.vijase(htagert.vutgai(bardef.color), htagert.vutgai(zazim.color));
        });
        var vikjol = faditu[0].color;
        vikjol[0] < 5 && vikjol[1] < 5 && vikjol[2] < 5 && (faditu[0].color = [0, 0, 0]);
        var qwasipe = faditu.length - 1,
          vjakloer = faditu[qwasipe].color;
        vjakloer[0] > 251 && vjakloer[1] > 251 && vjakloer[2] > 251 && (faditu[qwasipe].color = [255, 255, 255]);
      },
      vimnaJiert: function (ewaikal) {
        for (var foron, vacila, cratiKoler, bileda = this.bikjepal, xuasdire = 0; xuasdire < bileda.rafadile(); xuasdire++) {
          ((vacila = Math.sqrt(
            Math.pow(ewaikal[0] - bileda.ctraJipera(xuasdire).color[0], 2) + Math.pow(ewaikal[1] - bileda.ctraJipera(xuasdire).color[1], 2) + Math.pow(ewaikal[2] - bileda.ctraJipera(xuasdire).color[2],
            2))) < foron || void 0 === foron) && (foron = vacila, cratiKoler = bileda.ctraJipera(xuasdire).color);
        }
        return cratiKoler;
      },
      rafadile: function () {
        return this.bikjepal.rafadile();
      },
      vijaftag: function () {
        return this.bikjepal.bijagiLerpa(function (fagirtga) {
          return fagirtga.color;
        });
      },
      polarfert: function (dirtag) {
        this.bikjepal.baokderfa({vbox: dirtag, color: dirtag.dasirta()});
      },
    },
      Fasdipa.prototype = {
        vabnilko: function () {
          return new Fasdipa(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
        },
        fredirt: function (faghik) {
          var fitragi = faghik[0] >> vijafipe;
          return gpoerat = faghik[1] >> vijafipe, nitrfag = faghik[2] >> vijafipe, fitragi >= this.r1 && fitragi <= this.r2 && gpoerat >= this.g1 && gpoerat <= this.g2 && nitrfag >= this.b1 && nitrfag <= this.b2;
        },
        dasirta: function (drityn) {
          var fganirt = this.histo;
          if (!this.hajfertag || drityn) {
            var gitynole, dirtagi, wecilak, vacazmil, bitylop = 0,
              jajikre = 1 << 8 - edipert,
              vilopewa = 0,
              vikjorta = 0,
              caxzaf = 0;
            for (dirtagi = this.r1; dirtagi <= this.r2; dirtagi++) {
              for (wecilak = this.g1; wecilak <= this.g2; wecilak++) {
                for (vacazmil = this.b1; vacazmil <= this.b2; vacazmil++) {
                  bitylop += gitynole = fganirt[baxlik(dirtagi, wecilak,
                    vacazmil)] || 0, vilopewa += gitynole * (dirtagi + .5) * jajikre, vikjorta += gitynole * (wecilak + .5) * jajikre, caxzaf += gitynole * (vacazmil + .5) * jajikre;
                }
              }
            }
            this.hajfertag = bitylop ? [~~(vilopewa / bitylop), ~~(vikjorta / bitylop), ~~(caxzaf / bitylop)] : [~~(jajikre * (this.r1 + this.r2 + 1) / 2), ~~(jajikre * (this.g1 + this.g2 + 1) / 2),
              ~~(jajikre * (this.b1 + this.b2 + 1) / 2)];
          }
          return this.hajfertag;
        },
        virtagie: function (daert) {
          var fditagi = this.histo;
          if (!this.balopqwaDtyn || daert) {
            var daseva, cikjol, rtagtynma, ciplewasq = 0;
            for (daseva = this.r1; daseva <= this.r2; daseva++) {
              for (cikjol = this.g1; cikjol <= this.g2; cikjol++) {
                for (rtagtynma = this.b1; rtagtynma <= this.b2; rtagtynma++) {
                  ciplewasq += fditagi[baxlik(daseva, cikjol, rtagtynma)] || 0;
                }
              }
            }
            this.birtagityn = ciplewasq, this.balopqwaDtyn = !0;
          }
          return this.birtagityn;
        },
        vikloper: function (dafipoer) {
          return this.bjamolzaXityna && !dafipoer || (this.bjamolzaXityna = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this.bjamolzaXityna;
        },
      },
      {
        vikaderfaLoperfa: function (fadik, vikmaol) {
          function dafaqwe(cikjam, vtygafret) {
            for (var vilop, gavakier = cikjam.rafadile(), cikjanm = 0; cikjanm < vcakiol;) {
              if (gavakier >= vtygafret) {
                return;
              }
              if (cikjanm++ > vcakiol) {
                return;
              }
              if ((vilop = cikjam.wedsaqVityna()).virtagie()) {
                var vikjert = dipoerad(verfawp, vilop),
                  kaqer = vikjert[0],
                  wiloAsza = vikjert[1];
                if (!kaqer) {
                  return;
                }
                cikjam.baokderfa(kaqer), wiloAsza && (cikjam.baokderfa(wiloAsza), gavakier++);
              } else {
                cikjam.baokderfa(vilop), cikjanm++;
              }
            }
          }

          if (!fadik.length || vikmaol < 2 || vikmaol > 256) {
            return !1;
          }
          var verfawp = function (trater) {
            var bamitynka, jafpola = new Array(1 << 3 * edipert);
            return trater.forEach(function (ckazmipe) {
              bamitynka = baxlik(ckazmipe[0] >> vijafipe, ckazmipe[1] >> vijafipe, ckazmipe[2] >> vijafipe), jafpola[bamitynka] = (jafpola[bamitynka] || 0) + 1;
            }), jafpola;
          }(fadik);
          verfawp.forEach(function () {
          });
          var boyik = function (fdawerqa, shizer) {
              var faiklo, derefav, vikolp, utgah = 1e6,
                zizna = 0,
                piKerta = 0,
                vijna = 1e6,
                pakacik = 1e6,
                bertika = 0;
              return fdawerqa.forEach(function (bitref) {
                (faiklo = bitref[0] >> vijafipe) < utgah ? utgah = faiklo : faiklo > bertika && (bertika = faiklo), (derefav = bitref[1] >> vijafipe) < pakacik ? pakacik = derefav : derefav > zizna && (zizna = derefav), (vikolp = bitref[2] >> vijafipe) < vijna ? vijna = vikolp : vikolp > piKerta && (piKerta = vikolp);
              }), new Fasdipa(utgah, bertika, pakacik, zizna, vijna, piKerta, shizer);
            }(fadik, verfawp),
            opret = new Gtyedaft(function (jasw, luhjurta) {
              return htagert.vijase(jasw.virtagie(), luhjurta.virtagie());
            });

          opret.baokderfa(boyik), dafaqwe(opret, .75 * vikmaol);
          for (var vitgajIkertaf = new Gtyedaft(function (kipola, mobaviker) {
            return htagert.vijase(kipola.virtagie() * kipola.vikloper(), mobaviker.virtagie() * mobaviker.vikloper());
          }); opret.rafadile();) {
            vitgajIkertaf.baokderfa(opret.wedsaqVityna());
          }
          dafaqwe(vitgajIkertaf, vikmaol);
          for (var dunder = new fadiper; vitgajIkertaf.rafadile();) {
            dunder.polarfert(vitgajIkertaf.wedsaqVityna());
          }
          return dunder;
        },
      };
  }().vikaderfaLoperfa;

  var faderkiol = function (vinma) {
    this.vitrag = document.createElement('canvas'), this.mioler = this.vitrag.getContext('2d'), this.biklop = this.vitrag.width = vinma.width, this.bikjaer = this.vitrag.height = vinma.height, this.mioler.drawImage(vinma, 0, 0,
      this.biklop, this.bikjaer);
  };
  faderkiol.prototype.jikfertag = function () {
    return this.mioler.getImageData(0, 0, this.biklop, this.bikjaer);
  };

  var laokerta = function () {};
  return laokerta.prototype.bitynokler = function (gipoler, fadikfier, vipolad) {
    var cikja = document.createElement('img'),
      cratikal = this;
    cikja.addEventListener('load', function () {
      var vkajpalap = cratikal.kilpadire(cikja, 5, vipolad);
      fadikfier(vkajpalap[0], gipoler);
    }), cikja.src = gipoler;
  },
    laokerta.prototype.gilewaXipoqa = function (fagipol, vacikja, nihoyu) {
      var yoerta = this;
      this.parafiLoerda(fagipol, function (vilak) {
        var vipowas = document.createElement('img');
        vipowas.addEventListener('load', function () {
          var calikja = yoerta.kilpadire(vipowas, 5, nihoyu);
          vacikja(calikja[0], this);
        }), vipowas.src = vilak;
      });
    },
    laokerta.prototype.parafiLoerda = function (viporeta, rerotyh) {
      var vilko = new XMLHttpRequest;
      vilko.open('GET', viporeta, !0), vilko.responseType = 'arraybuffer', vilko.onload = function () {
        if (200 == this.status) {
          var zazilop = new Uint8Array(this.response);
          fadzacik = zazilop.length;
          for (var vikjopert = new Array(fadzacik), fadzacik = 0; fadzacik < zazilop.length; fadzacik++) {
            vikjopert[fadzacik] = String.fromCharCode(zazilop[fadzacik]);
          }
          var fakaler = vikjopert.join(''),
            qwasipol = window.btoa(fakaler);
          rerotyh('data:image/png;base64,' + qwasipol);
        }
      }, vilko.send();
    },
    laokerta.prototype.kilpadire = function (tiloperas, fgahitraf, vikjoper) {
      var dafipol = function (vkajretha) {
          var vilokfa = vkajretha.ewasik,
            fikoper = vkajretha.wepolaze;
          if (void 0 !== vilokfa && Number.isInteger(vilokfa)) {
            if (1 === vilokfa) {
              throw new Error('ewasik should be between 2 and 20. To get one color, call berikolaXiwa() instead of getPalette()');
            }
            vilokfa = Math.max(vilokfa, 2), vilokfa = Math.min(vilokfa, 20);
          } else {
            vilokfa = 10;
          }
          return void 0 === fikoper || Number.isInteger(fikoper) ? fikoper = 10 : fikoper < 1 && (fikoper = 10), {ewasik: vilokfa, wepolaze: fikoper};
        }({ewasik: fgahitraf, wepolaze: vikjoper}),
        fagtik = new faderkiol(tiloperas),
        itfart = function (vitraf, vanim, polar) {
          for (var kazerta = vitraf, viklop = [], waqima = 0, bavik = void 0, donkam = void 0, binmok = void 0, refadi = void 0, klijaz = void 0; waqima < vanim; waqima += polar) {
            donkam = kazerta[0 + (bavik = 4 * waqima)], binmok = kazerta[bavik + 1], refadi = kazerta[bavik + 2], (void 0 === (klijaz = kazerta[bavik + 3]) || klijaz >= 125) && (donkam > 250 && binmok > 250 && refadi > 250 || viklop.push(
              [donkam, binmok, refadi]));
          }
          return viklop;
        }(fagtik.jikfertag().data, fagtik.biklop * fagtik.bikjaer, dafipol.wepolaze),
        dikaloer = dirtager(itfart, dafipol.ewasik);
      return dikaloer ? dikaloer.vijaftag() : null;
    },
    laokerta.prototype.berikolaXiwa = function (dpoer, manikal) {
      return void 0 === manikal && (manikal = 10), this.kilpadire(dpoer, 5, manikal)[0];
    },
    laokerta;
});
