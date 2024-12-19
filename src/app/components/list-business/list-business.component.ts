import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importando ActivatedRoute
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-list-business',
  imports: [CommonModule],
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent implements OnInit {

  businesses: Business[] = [];

  constructor(
    private businessService: BusinessService,
    private route: ActivatedRoute // Injetando o ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const businessId = Number(id);
    this.loadBusiness(businessId);
  }

  loadBusiness(id: number): void {
    this.businessService.getBusinessById(id).subscribe((business: Business) => {
      this.businesses.push(business);
    });
  }
}
