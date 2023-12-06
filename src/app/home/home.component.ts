import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  words_EN = [
    'Hello World!',
    'My name is Alessio Cerullo!',
    'Welcome to my World!',
  ];
  words_DE = [
    'Hello World!',
    'My name is Alessio Cerullo!',
    'Welcome to my World!',
  ];
  words_IT = [
    'Hello World!',
    'My name is Alessio Cerullo!',
    'Welcome to my World!',
  ];
  words_FR = [
    'Hello World!',
    'My name is Alessio Cerullo!',
    'Welcome to my World!',
  ];
  part = '';
  i = 0;
  offset = 0;
  len = this.words_EN.length;
  forwards = true;
  skipCount = 0;
  skipDelay = 20;
  speedDuration = 150;
  constructor() { }

  ngOnInit(): void {

    this.wordFlick();
    console.log('Testing');
  }

  ngOnChanges(): void {
    // parentComponent
    var selectedElement = document.getElementById('language');
    var language2 = selectedElement as HTMLSelectElement;
    var language = language2.value;
    console.log(language);
  }

  wordFlick() {
    setInterval(() => {
      if (this.forwards) {
        if (this.offset >= this.words_EN[this.i].length) {
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
      this.part = this.words_EN[this.i].substr(0, this.offset);
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
