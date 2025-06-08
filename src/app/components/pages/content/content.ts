// src/app/content/content.ts (ou content.component.ts, se você tiver renomeado)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importe CommonModule
import { ActivatedRoute, RouterLink } from '@angular/router';   // <-- Importe RouterLink (se for usar [routerLink] no HTML)
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  standalone: true, // <-- ADICIONE ESTA LINHA para marcar como componente standalone
  imports: [
    CommonModule,  // <-- ADICIONE CommonModule aqui
    RouterLink     // <-- ADICIONE RouterLink aqui (só se for usar [routerLink] no template HTML)
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  photoCover:string = "https://assets.dio.me/0XOezmEOefR55-vMdozTXE8o4RuPZ9IcBM51KCWgvU0/f:webp/q:80/L2FydGljbGVzL2NvdmVyLzg2OTMyY2U2LTZlNGUtNDE4NC1hMjBlLTlmMjZhOTk3Yzc0MC5wbmc"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string="Editar depois"

  constructor ( private route: ActivatedRoute
  ){}
  ngOninit(): void {
    this.route.paramMap.subscribe( value => 
      console.log(value.get("Id"))
    )
  }
}
