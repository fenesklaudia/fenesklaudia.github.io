import { Injectable } from '@angular/core';
import { OneServiceViewModel } from '../vew-models/one-service-view-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  public services: { [id: string]: OneServiceViewModel } = {
    daytime: {
      title: 'Nappali smink',
      summaries: [
        'A tökéletes választás egy üzleti,mindennapi megjelenéshez. A smink természetes hatású  földszínekkel, visszafogott színű rúzzsal készül.',
      ],
      details: {
        'Nappali smink': {
          price: 10_000,
          schedule: '35-45 perc'
        },
      },
      picName: "daytime.jpg",
    },
    casual: {
      title: 'Alkalmi smink',
      summaries: [
        'Smink szalagavatóra, ballagásra, kismama fotózásra, karácsonyi bulira, szilveszterre, bármilyen különleges alkalomra.',
        'A sminket személyre szabottan készítem el. Először átbeszéljük milyen alkalomra kéred a sminket és mik az elképzeléseid, és együtt kitaláljuk milyen összhatást szeretnénk elérni igazodva a ruhádhoz és a hajadhoz is.',
        'A cél az, hogy jól érezd magad a bőrödben és passzoljon az egyéniségedhez a smink.',
      ],
      details: {
        'Alkalmi smink': {
          price: 13_000,
          schedule: '90 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1500 Ft'
        },
      },
      picName: "casual.jpg",
    },
    bridal: {
      title: 'Menyasszonyi smink',
      summaries: [
        'Minden menyasszony a legszebb szeretne lenni a nagy napon, ebben lehetek én segítségedre.Az esküvő előtt néhány hónappal, de legkésőbb az esküvő előtt egy hónappal elkészítem a próbasminked, ahol átbeszéljük az elképzeléseidet, megmutatod a ruhádat, a helyszínt, hogy milyen kiegészítőket szeretnél és mindehhez igazítjuk a sminked stílusát és színvilágát. A próbasmink alkalmával lehetőségünk adódik különböző erősségű sminkek kipróbálásra, hogy együtt megtaláljuk azt a sminket, amiben magabiztos leszel a nagy napon. ',
        'Az ár tartalmaz egy kis "bridal kit" csomagot, amelynek segítségével a nap folyamán te is fel tudod frissíteni a sminked.',
      ],
      details: {
        'Menyasszonyi próbasmink': {
          price: 16_500,
          schedule: '90-120 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1500 Ft'
        },
        'Menyasszonyi smink a nagy napon': {
          price: 16_500,
          schedule: '90 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1500 Ft'
        },
        'Vőlegény smink': {
          price: 3_500,
          schedule: '30 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1500 Ft'
        },
        'Minden további vendég sminkje': {
          price: 13_000,
          schedule: '30-60 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1500 Ft'
        },
      },
      picName: null,
    },
    advice: {
      title: 'Sminktanácsadás',
      summaries: [
        'Nem tudod milyen smink, melyik színek állnak jól neked, vagy megtanulnád kifesteni magad?  Egy személyre szóló tanácsadáson segíthetek mindebben. Választhatsz egy nappali smink és egy nappali/alkalmi smink elsajátítása között. ',
        'Az oktatáson átnézem a neszeszered, segítek megállapítani az alap színtípusod, hogy tudd milyen színekhez nyúlj sminkeléskor.',
        'Nappali smink tanácsadás  során megtanítalak hogy mivel és hogyan alapozz és korrektorozz. Megmutatom a pirosító, bronzosító, highlighter használatát, valamint a szemformádhoz illő nappali szemsmink elkészítését, a szemöldökformázással bezárólag. Végül megtanítalak a szájceruza, rúzs használatára, kül hangsúllyal arra, hogy mely rúzsszínek állnak jól neked.',
        'Alkalmi smink tanácsadás tartalmazza mindazt amit a nappali, de itt megtanulhatod hogy készíts nappali sminkből alkalmit, megtanítalak kontúrozni, egy hangsúlyosabb szemsminket elkészíteni akár a te elképzeléseid szerint.',
      ],
      details: {
        'Nappali sminktanácsadás': {
          price: 20_000,
          schedule: '2 óra'
        },
        'Nappali/alkalmi sminktanácsadás': {
          price: 30_000,
          schedule: '3 óra'
        },
      },
      picName: "advice.jpg",
    },
    'other-events': {
      title: 'Fotózás, forgatás, rendezvény',
      summaries: [
        'Keress kérlek e-mail-en a megvalósítandó projekt leírásával, így tudok egyedi árajánlatot készíteni.',
      ],
      details: {},
      picName: "other-events.png",
    },
  };

  public getDetailsLength(service: OneServiceViewModel): number {
    if (!service.details) {
      return 0;
    }

    return Object.keys(service.details).length
  }

}
