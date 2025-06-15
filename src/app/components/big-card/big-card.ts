import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './big-card.html', 
  styleUrl: './big-card.css' 
})
export class BigCard {
  @Input()
  photoCover:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s"
  @Input()
  cardTitle: string = "" 
  @Input()
  cardDescription: string = "" 
  @Input()
  id: string = "1" 
}