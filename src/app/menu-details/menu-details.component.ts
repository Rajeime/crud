import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  products: any = []; //cannot assign number
  id: any = [];
  detail: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataService.sendGetDetailsId(this.id).subscribe((data: any[]) => {
      this.products = data[this.detail];
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let details = params.get('id');
      this.detail = details;
      console.log(this.detail);
    });
  }

}
