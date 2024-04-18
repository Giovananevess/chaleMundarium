import { AfterViewInit, Component, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-details-chale',
  templateUrl: './details-chale.component.html',
  styleUrls: ['./details-chale.component.css']
})
export class DetailsChaleComponent {

  constructor(private elementRef: ElementRef) { }

  Images: Array<object> = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6'
    }
  ]
  config = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };



  images: Array<string> = [
    '../../../assets/details/IMG_2731.jpg',
    '../../../assets/details/IMG_2732.jpg',
    '../../../assets/details/IMG_2733.jpg',
    '../../../assets/details/IMG_2735.jpg',
    '../../../assets/details/IMG_2808_jpg.jpg',
    '../../../assets/details/_MG_6308.jpg',
    '../../../assets/details/_MG_6369.jpg',
    '../../../assets/details/_MG_6406.jpg',
    '../../../assets/details/_MG_6450.jpg',
    '../../../assets/details/IMG_2733.jpg',
    '../../../assets/details/_MG_6491.jpg',
    '../../../assets/details/IMG_2817.jpg',

    // Adicione mais URLs de imagens conforme necessário
  ];

}
