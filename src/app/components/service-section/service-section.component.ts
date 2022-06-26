import { Component, OnInit } from '@angular/core';

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {

  serviceItems: ServiceItem[] = [
    {
      name: 'photography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'camera.svg'
    },
    {
      name: 'web design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'design.svg'
    },
    {
      name: 'creativity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'creativity.svg'
    },
    {
      name: 'seo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'seo.svg'
    },
    {
      name: 'css/html',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'code.svg'
    },
    {
      name: 'digital',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit hendrerit suscipit.',
      icon: 'digital.svg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
