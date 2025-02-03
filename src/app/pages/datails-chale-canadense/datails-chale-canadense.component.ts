import { Component } from '@angular/core';

@Component({
  selector: 'app-datails-chale-canadense',
  templateUrl: './datails-chale-canadense.component.html',
  styleUrls: ['./datails-chale-canadense.component.css']
})
export class DatailsChaleCanadenseComponent {

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
    '../../../assets/chale-canadense/details01.jfif',
    '../../../assets/chale-canadense/details02.jfif',
    '../../../assets/chale-canadense/details03.jfif',
    '../../../assets/chale-canadense/details04.jfif',
    '../../../assets/chale-canadense/details05.jfif',
    '../../../assets/chale-canadense/details06.jfif',
    '../../../assets/chale-canadense/details07.jfif',
    '../../../assets/chale-canadense/details08.jfif',
  ];

}
