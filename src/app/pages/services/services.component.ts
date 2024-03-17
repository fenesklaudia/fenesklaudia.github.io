import { Component, Input, OnInit } from '@angular/core';
import { OneServiceViewModel } from '../../vew-models/one-service-view-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  subpage = '';

  services: { [id: string]: OneServiceViewModel } = {
    daytime: {
      title: 'Nappali smink',
      summaries: [
        'A tökéletes választás egy üzleti,mindennapi megjelenéshez. A smink természetes hatású  földszínekkel, visszafogott színű rúzzsal készül.',
      ],
      schedulesInMunites: { Időtartama: '35-45 perc' },
      pricesInHuf: { Ár: 10_000 },
      hints: [],
    },
    casual: {
      title: 'Alkalmi smink',
      summaries: [
        'Smink szalagavatóra, ballagásra, kismama fotózásra, karácsonyi bulira, szilveszterre, bármilyen különleges alkalomra.',
        'A sminket személyre szabottan készítem el. Először átbeszéljük milyen alkalomra kéred a sminket és mik az elképzeléseid, és együtt kitaláljuk milyen összhatást szeretnénk elérni igazodva a ruhádhoz és a hajadhoz is.',
        'A cél az, hogy jól érezd magad a bőrödben és passzoljon az egyéniségedhez a smink.',
      ],
      schedulesInMunites: { Időtartama: '90 perc' },
      pricesInHuf: { Ár: 13_000 },
      hints: ['Tincses vagy soros műszempilla ragasztása +1500 Ft'],
    },
    bridal: {
      title: 'Menyasszonyi smink',
      summaries: [
        'Minden menyasszony a legszebb szeretne lenni a nagy napon, ebben lehetek én segítségedre.Az esküvő előtt néhány hónappal, de legkésőbb az esküvő előtt egy hónappal elkészítem a próbasminked, ahol átbeszéljük az elképzeléseidet, megmutatod a ruhádat, a helyszínt, hogy milyen kiegészítőket szeretnél és mindehhez igazítjuk a sminked stílusát és színvilágát. A próbasmink alkalmával lehetőségünk adódik különböző erősségű sminkek kipróbálásra, hogy együtt megtaláljuk azt a sminket, amiben magabiztos leszel a nagy napon. ',
        'Az ár tartalmaz egy kis "bridal kit" csomagot, amelynek segítségével a nap folyamán te is fel tudod frissíteni a sminked.',
      ],
      schedulesInMunites: {
        'Menyasszonyi próbasmink időtartama': '90-120 perc',
        'Menyasszonyi smink időtartama a nagy napon': '90 perc',
        'Vőlegény smink időtartama': '30 perc',
        'További vendégek sminkjének időtartama': '30-60 perc',
      },
      pricesInHuf: {
        'Menyasszonyi próbasmink': 16_500,
        'Menyasszonyi smink a nagy napon': 16_500,
        'Vőlegény smink': 3_500,
        'Minden további vendég sminkje': 13_000,
      },
      hints: ['Tincses vagy soros műszempilla ragasztása +1500 Ft'],
    },
    advice: {
      title: 'Sminktanácsadás',
      summaries: [
        'Nem tudod milyen smink, melyik színek állnak jól neked, vagy megtanulnád kifesteni magad?  Egy személyre szóló tanácsadáson segíthetek mindebben. Választhatsz egy nappali smink és egy nappali/alkalmi smink elsajátítása között. ',
        'Az oktatáson átnézem a neszeszered, segítek megállapítani az alap színtípusod, hogy tudd milyen színekhez nyúlj sminkeléskor.',
        'Nappali smink tanácsadás  során megtanítalak hogy mivel és hogyan alapozz és korrektorozz. Megmutatom a pirosító, bronzosító, highlighter használatát, valamint a szemformádhoz illő nappali szemsmink elkészítését, a szemöldökformázással bezárólag. Végül megtanítalak a szájceruza, rúzs használatára, kül hangsúllyal arra, hogy mely rúzsszínek állnak jól neked.',
        'Alkalmi smink tanácsadás tartalmazza mindazt amit a nappali, de itt megtanulhatod hogy készíts nappali sminkből alkalmit, megtanítalak kontúrozni, egy hangsúlyosabb szemsminket elkészíteni akár a te elképzeléseid szerint.',
      ],
      schedulesInMunites: {
        'Nappali sminktanácsadás időtartama': '2 óra',
        'Nappali/alkalmi sminktanácsadás időtartama': '3 óra',
      },
      pricesInHuf: {
        'Nappali sminktanácsadás ára': 20_000,
        'Nappali/alkalmi sminktanácsadás ára': 30_000,
      },
      hints: []
    },
    'other-events': {
      title: 'Fotózás, forgatás, rendezvény',
      summaries: [
        'Keress kérlek e-mail-en a megvalósítandó projekt leírásával, így tudok egyedi árajánlatot készíteni.',
      ],
      schedulesInMunites: { },
      pricesInHuf: { },
      hints: []
    },
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((_) => {
      this.subpage = route.snapshot.params['subpage'];
    });

    this.initServices();
  }

  initServices() {
    // this.services['daytime'] = {
    // }
  }

  ngOnInit(): void {
    console.log('asd');
  }
}
