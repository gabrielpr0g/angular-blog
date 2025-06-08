import { Component, Input } from '@angular/core';
import { MenuTitle } from "../../menu-title/menu-title";
import { BigCard } from "../../big-card/big-card";
import { SmallCard } from '../../small-card/small-card';
import { MenuBar } from '../../menu-bar/menu-bar';
import { RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitle, BigCard, SmallCard, MenuBar,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    @Input()
  ids: string [] = [];
}

