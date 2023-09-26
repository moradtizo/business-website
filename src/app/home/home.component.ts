import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1s ease-out')),
    ]),
  ],
})

export class HomeComponent {
  animateButton: boolean = false;

  animateButtonClick() {
    this.animateButton = true;
    setTimeout(() => {
      this.animateButton = false;
    }, 300); // Adjust this time to match your animation duration
  }
}
