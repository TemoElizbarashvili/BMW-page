import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BMW';

  ngOnInit(): void {
    window.addEventListener("scroll", this.reveal);
  }

  reveal() {
    const elements = document.querySelectorAll('.fade');

    for (var i = 0; i < elements.length; i++) {
      let elementTop = elements[i].getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      let elementVisible = 250;

      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add('animate');
      } else {
        elements[i].classList.remove('animate');
      }
    }
  }
}
