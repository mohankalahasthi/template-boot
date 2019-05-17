import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profile: any = [
    {
      image: '../../assets/profile_placeholder.gif',
      head: 'Lorem ipsum',
      para: 'Lorem ipsum dolor'
    },
    {
      image: '../../assets/profile_placeholder.gif',
      head: 'Voluptatem dolores',
      para: 'Ullam nihil repudi'
    },
    {
      image: '../../assets/profile_placeholder.gif',
      head: 'Doloremque quo',
      para: 'Harum corrupti quia'
    },
    {
      image: '../../assets/profile_placeholder.gif',
      head: 'Voluptatem dicta',
      para: 'Et natus sapiente'
    },
  ]

}
