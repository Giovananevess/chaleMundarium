import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';




declare var google: any; // Adicione esta linha
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 0;


  @Input()
  header!: string;
  expanded = false;

  @HostListener('click')
  onClick() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
    this.initMap();
  }
  initMap(): void {
    const myLatLng = { lat: -22.795978, lng: -45.7541044 }; // Localização em São Paulo
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        zoom: 15,
        center: myLatLng
      });
      const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Localização'
      });
    } else {
      console.error('Elemento do mapa não encontrado');
    }
  }


  images = [
    '../../../assets/capa_carousel/1_fuji.jpeg',
    '../../../assets/carousel_exp/_MG_6282.jpg',
    '../../../assets/capa_carousel/2_mezanino.jpeg',
  ];

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


  currentSlide: number = 0;

  startCarousel(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  showSlide(slideIndex: number): boolean {
    return slideIndex === this.currentSlide;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

}
