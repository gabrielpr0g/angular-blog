import { Component, Input } from '@angular/core'; // 'input' não é necessário aqui
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './big-card.html', // Ou './big-card.component.html'
  styleUrl: './big-card.css' // Ou './big-card.component.css'
})
export class BigCard {
  @Input()
  photoCover:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s"
  @Input()
  cardTitle: string = "" // Use string para tipos primitivos
  @Input()
  cardDescription: string = "" // Use string
  @Input()
  id: string = "0" // <-- MUDANÇA AQUI: 'id' com 'i' minúsculo
}