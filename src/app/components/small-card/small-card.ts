import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrls: ['./small-card.css','./small-card.responsive.css']
})
export class SmallCard {
  @Input()
  photoCover: String ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrpZUHoZUspJrtkZz2uAe9pSHPqSMKAZMew&s"
  @Input()
  cardTitle: String ="Saiu a nova atualização do Angular"
}
