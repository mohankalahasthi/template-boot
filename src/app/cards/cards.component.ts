import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards: any = [
    {
      icon: 'fas fa-cloud',
      iconBgColor: '#3cadd4',
      head: 'Lorem ipsum dolor',
      para: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Enim quam consectetur quibusdam magni minus aut modi aliquid.'
    },
    {
      icon: 'fas fa-tv',
      iconBgColor: '#add43c',
      head: 'Consectetur adipisicing',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ullam consequatur repellat debitis maxime.'
    },
    {
      icon: 'fas fa-rocket',
      iconBgColor: '#d43c61',
      head: 'Adipisicing elit totam',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eaque eveniet, nesciunt molestias. Ipsam, voluptate vero.'
    }
  ]

}
