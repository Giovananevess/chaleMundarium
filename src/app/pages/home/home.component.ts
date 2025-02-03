import { Component, HostListener, Input, OnInit } from '@angular/core';

declare var google: any; // Declaração do google.maps para acesso ao Google Maps

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;  // Mantém o índice da imagem atual no carrossel
  images = [
    '../../../assets/capa_carousel/1_fuji.jpeg',
    '../../../assets/carousel_exp/_MG_6282.jpg',
    '../../../assets/capa_carousel/2_mezanino.jpeg',
  ];  // Array de imagens do carrossel

  @Input() header!: string;  // Cabeçalho passado para o componente
  expanded = false;  // Controla o estado expandido de algum conteúdo (não especificado)

  @HostListener('click')  // Alterna o valor de 'expanded' quando o componente for clicado
  onClick() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();  // Inicia o carrossel automaticamente
    this.initMap();  // Inicializa o mapa
  }

  // Função para inicializar o mapa com o Google Maps
  initMap(): void {
    const myLatLng = { lat: -22.795978, lng: -45.7541044 };  // Localização em São Paulo
    const mapElement = document.getElementById('map');  // Obtém o elemento HTML do mapa
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

  // Funções para navegação do carrossel
  prevImage() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  // Controle automático do carrossel
  startCarousel(): void {
    setInterval(() => {
      this.nextImage();  // Muda para a próxima imagem automaticamente a cada 3 segundos
    }, 3000);
  }

  // Função para exibir a imagem do carrossel
  showSlide(slideIndex: number): boolean {
    return slideIndex === this.currentSlide;
  }

  // Função para navegar para uma imagem específica
  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }
}
