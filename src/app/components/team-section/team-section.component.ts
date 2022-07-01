import { Component, OnInit } from '@angular/core';

export interface TeamItem {
  name: string;
  role: string;
  src: string;
  srcset: string;
}

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss']
})
export class TeamSectionComponent implements OnInit {

  teamItems: TeamItem[] = [
    {
      name: 'matthew dix',
      role: 'graphic design',
      src: 'assets/images/matthew_dix.png',
      srcset: 'assets/images/matthew_dix-mobile.png 2x, assets/images/matthew_dix.png,'
    },
    {
      name: 'christopher campbell',
      role: 'branding/UX design',
      src: 'assets/images/christopher_campbell.png',
      srcset: 'assets/images/christopher_campbell-mobile.png 2x, assets/images/christopher_campbell.png'
    },
    {
      name: 'michael fertig',
      role: 'developer',
      src: 'assets/images/michael_fertig.png',
      srcset: 'assets/images/michael_fertig-mobile.png 2x, assets/images/michael_fertig.png 2x'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
