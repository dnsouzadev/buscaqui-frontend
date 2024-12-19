import { Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';

export const routes: Routes = [
    { path: '', redirectTo: 'businesses', pathMatch: 'full' },
    { path: 'businesses', component: BusinessComponent },
];
