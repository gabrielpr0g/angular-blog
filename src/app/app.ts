import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitle } from "./components/menu-title/menu-title";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTitle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-blog';
}
