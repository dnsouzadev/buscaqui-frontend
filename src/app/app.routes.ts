import { Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { ListBusinessComponent } from './components/list-business/list-business.component';

export const routes: Routes = [
    { path: '', redirectTo: 'businesses', pathMatch: 'full' },
    { path: 'businesses', component: BusinessComponent },
    { path: 'businesses/:id', component: ListBusinessComponent },
];
