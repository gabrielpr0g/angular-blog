import { Routes } from '@angular/router';
import { Content } from './components/pages/content/content';
import { Home } from './components/pages/home/home';
import { RouterLink } from '@angular/router';
export const routes: Routes = [ {
    path: 'content/:id',
    component: Content
  },
    {
        path:'',
        component: Home
    }];
