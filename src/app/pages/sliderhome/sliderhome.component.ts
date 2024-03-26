import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderhome',
  templateUrl: './sliderhome.component.html',
  styleUrls: ['./sliderhome.component.css']
})
export class SliderComponent implements OnInit {
  currentSlide = 0;

  images: string[] = [
    '../../../assets/capa_carousel/1_fuji.jpeg',
    '../../../assets/capa_carousel/1_mezanino.jpeg',
    '../../../assets/capa_carousel/2_mezanino.jpeg',
  ];

  slideTexts = [
    "Texto para a primeira imagem",
    "Texto para a segunda imagem",
    "Texto para a terceira imagem"
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  showSlide(slideIndex: number): boolean {
    return slideIndex === this.currentSlide;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }
}
