import { Component } from '@angular/core';
import { MenuTitle } from "../../menu-title/menu-title";
import { BigCard } from "../../big-card/big-card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitle, BigCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
