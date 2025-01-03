import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessComponent } from './components/business-component/business/business.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Buscaqui';
}
