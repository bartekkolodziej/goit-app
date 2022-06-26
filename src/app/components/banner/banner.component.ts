import {Component, OnInit} from '@angular/core';

export interface NavItem {
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  navItems: NavItem[] = [
    {
      name: 'about',
    },
    {
      name: 'service',
    },
    {
      name: 'work',
    },
    {
      name: 'blog',
    },
    {
      name: 'contact',

    },
    {
      name: 'shoppingCart',
      icon: 'shopping_cart.svg',
    },
    {
      name: 'search',
      icon: 'search.svg',
    }
  ];

  activeNavItem = this.navItems[0];


  constructor() {
  }

  ngOnInit(): void {
  }

  onNavItemClick(navItem: NavItem) {
    this.activeNavItem = navItem;
  }
}
