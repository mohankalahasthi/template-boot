import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  footerList: any = [
    {
      head: 'Lorem ipsum dolor',
      list1: 'Lorem ipsum dolor sit',
      list2: 'Nesciunt itaque, alias possimus',
      list3: 'Optio rerum beatae autem',
      list4: 'Nostrum nemo dolorum facilis',
      list5: 'Quo fugit dolor totam',
    },
    {
      head: 'Culpa quia, nesciunt',
      list1: 'Lorem ipsum dolor sit',
      list2: 'Reiciendis dicta laboriosam enim',
      list3: 'Corporis, non aut rerum',
      list4: 'Laboriosam nulla voluptas, harum',
      list5: 'Facere eligendi, inventore dolor',
    },
    {
      head: 'Neque, dolore, facere',
      list1: 'Lorem ipsum dolor sit',
      list2: 'Distinctio, inventore quidem nesciunt',
      list3: 'Explicabo inventore itaque autem',
      list4: 'Aperiam harum, sint quibusdam',
      list5: 'Labore excepturi assumenda',
    },
    {
      head: 'Illum, tempori, saepe',
      list1: 'Lorem ipsum dolor sit',
      list2: 'Recusandae, culpa necessita nam',
      list3: 'Cupiditate, debitis adipisci blandi',
      list4: 'Tempore nam, enim quia',
      list5: 'Explicabo molestiae dolor labore',
    }
  ]

}
