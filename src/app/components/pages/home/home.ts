import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuTitle } from "../../menu-title/menu-title";
import { BigCard } from "../../big-card/big-card";
import { SmallCard } from '../../small-card/small-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MenuTitle, BigCard, SmallCard, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    @Input()
  ids: string [] = [];
}

