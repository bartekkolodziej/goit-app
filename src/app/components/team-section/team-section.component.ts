import { Component, OnInit } from '@angular/core';

export interface TeamItem {
  name: string;
  role: string;
  img: string;
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
      img: 'matthew_dix.png'
    },
    {
      name: 'christopher campbell',
      role: 'branding/UX design',
      img: 'christopher_campbell.png'
    },
    {
      name: 'michael fertig',
      role: 'developer',
      img: 'michael_fertig.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
