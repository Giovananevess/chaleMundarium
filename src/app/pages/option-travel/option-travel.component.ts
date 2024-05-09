import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-option-travel',
  templateUrl: './option-travel.component.html',
  styleUrls: ['./option-travel.component.css']
})


export class OptionTravelComponent implements OnInit {

  cards: any[] = [];
  isMobile: boolean | undefined;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }


}
