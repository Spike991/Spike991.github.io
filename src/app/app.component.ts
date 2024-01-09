import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
/*
  // app.component.ts or in a service
constructor(private translate: TranslateService) {
  const browserLang = translate.getBrowserLang();
  const preferredLang = localStorage.getItem('preferredLanguage') || browserLang;
  // translate.use(preferredLang);
}
*/

constructor(private translate: TranslateService) {
  // Set default language
  translate.setDefaultLang('en');
  // Optionally, set language from browser settings
  const browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/en|fr|es/) ? browserLang : 'en');
}

  title = 'personal-portfolio';

  language = 'en';


}
