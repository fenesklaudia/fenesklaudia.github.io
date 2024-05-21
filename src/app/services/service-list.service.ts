import { Injectable } from '@angular/core';
import { OneServiceViewModel } from '../vew-models/one-service-view-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  public services: OneServiceViewModel[] = [
    {
      title: 'Nappali smink',
      summaries: [
        'A tökéletes választás egy hétköznapi, üzleti megjelenéshez, vagy csak egy találkához a barátnőiddel.',
        'Természetes, mégis ragyogó - ez a nappali smink titka. A megfelelő technikákkal és termékekkel könnyedén elérhetjük, hogy egész nap friss megjelenésed legyen. A nappali smink nem csupán a bőrhibák elfedéséről szól, hanem az arcod természetes szépségének kiemeléséről is.',
        'Az alap lépések között szerepel az alapozó, amely egyenletes bőrt biztosít, a korrektor, amely eltünteti a bőrhibákat, valamint a púder, amely mattítja az olajos fényt. A szemeknél a cél a természetes földszínek használatával a szemed karakterének kiemelése, míg az ajkakon egy lágy színű rúzs vagy szájfény teszi tökéletessé a megjelenést.',
      ],
      shortSummary: 'Természetes hatású smink egy üzleti, mindennapi megjelenéshez',
      details: {
        'Nappali smink': {
          price: 10_000,
          schedule: '35-45 perc'
        },
      },
      picName: "daytime.jpg",
      link: "daytime",
    }, {
      title: 'Alkalmi smink',
      summaries: [
        'Egy szépen elkészített alkalmi smink fokozza az önbizalmadat, miközben meghatározza az eseményhez való megfelelő stílust, legyen az szalagavató, ballagás, kismama fotózás, karácsonyi buli, szilveszter vagy bármilyen különleges alkalom.',
        'A sminket személyre szabottan készítem el. Először átbeszéljük milyen alkalomra kéred a sminket és mik az elképzeléseid, és együtt kitaláljuk milyen összhatást szeretnénk elérni igazodva a ruhádhoz és a hajadhoz is.',
        'Az alkalmi smink lehetőséget ad arra, hogy kreatívkodj és kifejezd a stílusodat, miközben mégis megőrzöd a természetességet és az eleganciát.',
        'A cél az, hogy jól érezd magad a bőrödben és passzoljon az egyéniségedhez a smink.'
      ],
      shortSummary: 'Különleges alkalmakra, fotózásokra',
      details: {
        'Alkalmi smink': {
          price: 13_000,
          schedule: '90 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1,500 Ft'
        },
      },
      picName: "casual.jpg",
      link: "casual",
    }, {
      title: 'Menyasszonyi smink',
      summaries: [
        'Minden menyasszony a legszebb szeretne lenni a nagy napon, ebben lehetek én segítségedre.',
        'Az esküvő előtt néhány hónappal, de legkésőbb az esküvő előtt egy hónappal elkészítem a próbasminked, ahol átbeszéljük az elképzeléseidet, megmutatod a ruhádat, a frizurádat, a helyszínt, hogy milyen kiegészítőket szeretnél és ehhez igazítjuk a sminked stílusát és színvilágát. A próbasmink alkalmával lehetőségünk adódik különböző erősségű sminkek kipróbálásra, hogy együtt megtaláljuk azt a sminket, amelynek segítségével életed egyik legfontosabb napján magabiztosan és lenyűgözően léphetsz az oltár elé.',
        'Legyen szó klasszikus vagy modern stílusról, a tökéletes menyasszonyi smink segít abban, hogy te legyél az a csodálatos menyasszony, akiről mindig is álmodtál.',
        'Az ár tartalmaz egy kis "bridal kit" csomagot, amelynek segítségével a nap folyamán te is fel tudod frissíteni a sminked.',
      ],
      details: {
        'Menyasszonyi próbasmink': {
          price: 16_500,
          schedule: '90-120 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1,500 Ft'
        },
        'Menyasszonyi smink a nagy napon': {
          price: 16_500,
          schedule: '90 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1,500 Ft'
        },
        'Vőlegény smink': {
          price: 3_500,
          schedule: '30 perc',
        },
        'Minden további vendég sminkje': {
          price: 13_000,
          schedule: '30-60 perc',
          hint: 'Tincses vagy soros műszempilla ragasztása +1,500 Ft'
        },
      },
      picName: 'bridal.jpg',
      link: "bridal",
    }, {
      title: 'Sminktanácsadás',
      summaries: [
        'Nem tudod milyen smink, melyik színek állnak jól neked, vagy csak megtanulnád kisminkelni magad a mindennapokra? Egy személyre szóló tanácsadáson segíthetek ebben.',
        'A sminktanácsadás lehetőséget ad arra, hogy megismerd az alapvető sminkelési technikákat, és személyre szabott tippeket kapj a legjobb sminktermékek kiválasztásához.',
        'Választhatsz egy nappali smink és egy nappali/alkalmi smink elsajátítása között.',
        'A nappali sminktanácsadás során átnézzük a neszesszered, tanácsokat kapsz az arcod alakjához és bőrtípusodhoz illő sminktechnikákról. Megismerheted a megfelelő alapozó, korrektor és púder kiválasztásának fontosságát, valamint megtanulhatod, hogyan emeld ki a szemeidet a megfelelő szemsminkkel a szemöldökformázással bezárólag. Megmutatom a pirosító, bronzosító, highlighter használatát, végül megtanítalak a szájceruza, rúzs használatára, külön hangsúllyal arra, hogy mely rúzsszínek állnak jól neked.',
        'Alkalmi smink tanácsadás tartalmazza mindazt, amit a nappali, de itt megtanulhatod hogy készíts nappali sminkből alkalmit, megtanítalak kontúrozni, és egy hangsúlyosabb szemsminket elkészíteni akár a te elképzeléseid szerint.',
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
      link: "advice",
    }, {
      title: 'Fotózás, forgatás, rendezvény',
      summaries: [
        'Ha fotózásra, forgatásra vagy rendezvényre szeretnél sminket kérni keress kérlek e-mail-en a megvalósítandó projekt leírásával, így tudok egyedi árajánlatot készíteni.',
      ],
      details: {},
      picName: "other-events.jpg",
      link: "other-events",
    },
  ];

  public getDetailsLength(service: OneServiceViewModel): number {
    if (!service.details) {
      return 0;
    }

    return Object.keys(service.details).length
  }

}
