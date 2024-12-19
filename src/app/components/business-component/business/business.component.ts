import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';



@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  businesses: Business[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe(data => (this.businesses = data));
  }
}
