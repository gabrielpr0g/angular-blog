import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {

  @Input()
  photoCover:String ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s"
  @Input()
  cardTitle: String= ""
  @Input()
  cardDescription: String= ""

}
