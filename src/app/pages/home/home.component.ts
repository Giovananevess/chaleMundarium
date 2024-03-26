import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 0;

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

  ngOnInit(): void {
    this.startCarousel();
  }

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
