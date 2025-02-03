import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isCanadian: boolean = true; // Alterar conforme necessário, isso poderia vir de um serviço ou contexto.

  isScrolled = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
  get chaletsUrl() {
    return this.isCanadian ? '/details-chale-canadense' : '/details-chale';
  }

}
