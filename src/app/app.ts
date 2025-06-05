import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-blog';
}
