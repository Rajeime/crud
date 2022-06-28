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

  productId:any
  //grab info from database
  ngOnInit(): void {
    this.dataservice.getMenuRequest().subscribe((result)=>{
       this.items = result;
    })

  }

//post http request for info inside form
 public getUserFunction(value:any){
 
if(this.editMode ){
  this.updateForm()
  this.editMode = false
}

else{

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
    let currentUrl = this.router.url
    this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
      this.router.navigate([currentUrl]);
    });
  })
}
 
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
    this.productId = id
    let currentProduct = this.items.find((item)=>{
      return item.id === id
    })
    this.form.setValue({
      menu_name: currentProduct?.menu_name,
      menu_description: currentProduct?.menu_description,
      menu_size:currentProduct?.menu_size,
      menu_img : "https://source.unsplash.com/1600x900/?food",
      cost:currentProduct?.cost
    })
    this.editMode = true
  }

  updateForm(){
    this.dataservice.updateMenuDetails(this.productId, this.form.value).subscribe((item)=>{
      let currentUrl = this.router.url
      this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
    })
  }
  
}
