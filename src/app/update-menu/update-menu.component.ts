import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { MenuInterface } from '../interfaces/menu';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  @ViewChild('menuForm') form!: NgForm;
  editMode: boolean = false;

  displayedColumns: string[] = ['id', 'name', 'size','image','cost','action'];
 
  constructor(private dataservice:DataService ,private router:Router) { }

  items!: MenuInterface[];


  //grab info from database
  ngOnInit(): void {
    this.dataservice.getMenuRequest().subscribe((result)=>{
       this.items = result;
    })

  }

//post http request for info inside form
 public getUserFunction(value:any){
    this.editMode = false

    const info = {
      id: 0,
      menu_name : value.menu_name,
      menu_description : value.menu_description,
      menu_size : parseFloat(value.menu_size),
      imageUrl : "https://source.unsplash.com/1600x900/?food",
      cost: parseFloat(value.cost)
    }

    this.dataservice.postMenuDetails(info).subscribe((result)=>{
      console.log(info)
      this.router.navigateByUrl("/inventory");
    })
  }

  delete(id:any) {
    this.dataservice.deleteMenu(id).subscribe((result)=> {
      let currentUrl = this.router.url
      this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
      console.log(id)
    }
    );
  }

  update(id:any){
    let currentProduct = this.items.find((item)=>{
      return item.id === id
    })
    this.form.setValue({
      menu_name: currentProduct?.menu_name,
      menu_description: currentProduct?.menu_description,
      menu_size:currentProduct?.menu_size,
      cost:currentProduct?.cost
    })
    this.editMode = true
  }

  
}
