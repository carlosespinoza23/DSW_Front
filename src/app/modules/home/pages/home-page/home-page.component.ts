import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../../auth/services/resource-service/resource.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  message = '';

  constructor(private resourceService: ResourceService){

  }

  ngOnInit(): void {
      this.resourceService.user().subscribe(data => {
        this.message = data.message;
      },
    err => {
      console.log(err);
    })
  }

}
