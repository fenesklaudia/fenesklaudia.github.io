import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private pages: any = {
    '/': {
      title: 'Fenes Klaudia Makeup Artist',
      desc: 'Professzionális sminkművész, esküvői, menyasszonyi és rendezvény sminkkészítés. Nézze meg portfóliónkat és foglaljon időpontot.',
      keywords: 'sminkművész, esküvői smink, menyasszonyi smink, professzionális smink, Budapest'
    },
    '/galery': {
      title: 'Galéria | Fenes Klaudia Makeup Artist',
      desc: 'Nézze meg a professzionális sminkportfóliómat: esküvői, menyasszonyi és rendezvény sminkkészítés képei.',
      keywords: 'smink galéria, portfólió, sminkkészítés, esküvői smink, transzformáció'
    },
    '/prices': {
      title: 'Árlista | Fenes Klaudia Makeup Artist',
      desc: 'Sminkművész árak: esküvői, menyasszonyi, rendezvény és különleges alkalmakra sminkkészítés áraival.',
      keywords: 'smink árak, sminkkészítés díja, esküvői smink ár, menyasszonyi smink ár'
    },
    '/services': {
      title: 'Szolgáltatások | Fenes Klaudia Makeup Artist',
      desc: 'Professzionális sminkműves szolgáltatások: esküvői, menyasszonyi, alkalmi és sminktanácsadás.',
      keywords: 'smink szolgáltatások, esküvői smink, menyasszonyi smink, alkalmi smink, sminktanácsadás'
    },
    '/about-me': {
      title: 'Rólam | Fenes Klaudia Makeup Artist',
      desc: 'Megismerkedhet velem: Fenes Klaudia, tapasztalt sminkművész, aki számos esküvőn és rendezvényen dolgozott.',
      keywords: 'sminkművész bemutatkozás, tapasztalat, szakértelem, sminkművész Budapest'
    },
    '/contact-me': {
      title: 'Kapcsolat | Fenes Klaudia Makeup Artist',
      desc: 'Lépjen kapcsolatba velem: telefonszám, email, és egyéb elérhetőségek az időpontfoglaláshoz.',
      keywords: 'kapcsolat, foglalás, telefonszám, email, rendelkezésre állás'
    }
  };

  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => this.update(e.urlAfterRedirects.split('?')[0] || '/'));
  }

  private update(route: string) {
    const p = this.pages[route] || this.pages['/'];
    this.title.setTitle(p.title);
    this.meta.updateTag({ name: 'description', content: p.desc });
    this.meta.updateTag({ name: 'keywords', content: p.keywords });
  }
}
