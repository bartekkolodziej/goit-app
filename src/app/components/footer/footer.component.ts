import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email)
  }

}
