import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './small-card.html',
  styleUrls: ['./small-card.css','./small-card.responsive.css']
})
export class SmallCard {
  @Input()
  photoCover: String ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrpZUHoZUspJrtkZz2uAe9pSHPqSMKAZMew&s"
  @Input()
  cardTitle: String ="Saiu a nova atualização do Angular"
  @Input()
  id:string="0";
}
