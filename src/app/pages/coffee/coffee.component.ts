import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent {

  constructor(private router: Router) { }

  goToAboutUs() {
    this.router.navigate(['/aboutUs']);
  }

}
