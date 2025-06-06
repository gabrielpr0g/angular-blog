import { Component } from '@angular/core';
import { MenuTitle } from "../../menu-title/menu-title";
import { BigCard } from "../../big-card/big-card";
import { SmallCard } from '../../small-card/small-card';
import { MenuBar } from '../../menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
