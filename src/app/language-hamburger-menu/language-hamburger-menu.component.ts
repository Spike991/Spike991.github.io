import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core'; // If using ngx-translate
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-language-hamburger-menu',
  templateUrl: './language-hamburger-menu.component.html',
  styleUrls: ['./language-hamburger-menu.component.scss'],
})
export class LanguageHamburgerMenuComponent implements OnInit {
  
  // Languages
  isGerman: boolean = true;
  isEnglish: boolean = true;
  isItalian: boolean = true;
  isFrench: boolean = true;
  
  currentLanguage: string | undefined;
  langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');

   
      this.adjustImageOpacity(this.translate.currentLang);
  
      this.translate.onLangChange.subscribe(langChangeEvent => {
        this.adjustImageOpacity(langChangeEvent.lang);
      });
    }
    

  switchLanguage(language: string) {
    console.log("changed");
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.isGerman = true;

  }


  adjustImageOpacity(currentLang: string) {
    console.log("in")
    const languages = ['en', 'de', 'it' , 'fr'];
    languages.forEach(lang => {
      console.log("lang", lang)

      const imageElement = document.getElementById(`image-${lang}`);
      if (imageElement) {
        if (lang === currentLang) {
          imageElement.style.opacity = '1';
          imageElement.style.borderBlockColor = 'white';
          imageElement.classList.remove('reduced-opacity');
          console.log("yes")

        } else {
          imageElement.classList.add('reduced-opacity');
          imageElement.style.opacity = '0.5';

          console.log("no")

        }
      }
    });
  }
    
  

  ngOnDestroy() {
    // Only unsubscribe if the subscription exists
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }  
  }


/*
  // Function to change language
function changeLanguage(selectedLanguage) {
  localStorage.setItem('preferredLanguage', selectedLanguage);
  location.reload();
}

// Function to load the language preference
function loadLanguage() {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Default to English
  // Logic to update the webpage's text to the selected language
}

// Calling loadLanguage on page load
window.onload = loadLanguage;
*/
}
