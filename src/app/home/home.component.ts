import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  words = [
    'Hello World!',
    'My name is Alessio Cerullo',
    'Welcome to my World!',
    'Hallo Welt!',
    'Mein Name ist Alessio Cerullo',
    'Willkommen in meiner Welt!',
    'Ciao Mondo!',
    'Mi chiamo Alessio Cerullo',
    'Benvenuto nel mio mondo!',
    'Bonjour le monde',
    "Je m'appelle Alessio Cerullo",
    'Bienvenue dans mon monde!'

  ];
  
  part = '';
  i = 0;
  offset = 0;
  len = this.words.length;
  forwards = true;
  skipCount = 0;
  skipDelay = 20;
  speedDuration = 150;


  constructor(private translate: TranslateService) {
    
  
  }

  ngOnInit(): void {
    setTimeout(()=> {},200);
     this.wordFlick(this.words);

  }

  ngOnChanges(): void {
  }

  wordFlick(words: string[]) {
    setTimeout(()=> {},200);

    setInterval(() => {
      if (this.forwards) {
        if (this.offset >= words[this.i].length) {
          this.skipCount++;
          if (this.skipCount === this.skipDelay) {
            this.forwards = false;
            this.skipCount = 0;
          }
        }
      } else {
        if (this.offset === 0) {
          this.forwards = true;
          this.i++;
          this.offset = 0;
          if (this.i >= this.len) {
            this.i = 0;
          }
        }
      }
      this.part = words[this.i].substr(0, this.offset);
      if (this.skipCount === 0) {
        if (this.forwards) {
          this.offset++;
        } else {
          this.offset--;
        }
      }
      const wordElement = document.querySelector('.title');
      if (wordElement) {
        wordElement.textContent = this.part;
      }
    }, this.speedDuration);
  }
}
