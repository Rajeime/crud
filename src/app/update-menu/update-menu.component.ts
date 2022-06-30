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

<<<<<<< HEAD
  id:any


=======
  productId:any
>>>>>>> 2e19f0fcf19257cb03d50f339a2abb66f3a53c47
  //grab info from database
  ngOnInit(): void {
    this.dataservice.getMenuRequest().subscribe((result)=>{
       this.items = result;
    })

  }

//post http request for info inside form
 public getUserFunction(value:any){
<<<<<<< HEAD

    if(this.editMode){
      this.updateMenu()
    }

    else{
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
        let currentUrl = this.router.url
        this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
      })
    }
    }
    
=======
 
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
>>>>>>> 2e19f0fcf19257cb03d50f339a2abb66f3a53c47

  //delete function 
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


  // update click event
  update(id:any){
    this.productId = id
    let currentProduct = this.items.find((item)=>{
      return item.id === id
    })

    this.form.setValue({
      menu_name: currentProduct?.menu_name,
      menu_description: currentProduct?.menu_description,
      menu_size:currentProduct?.menu_size,
<<<<<<< HEAD
      imageUrl : "https://source.unsplash.com/1600x900/?food",
=======
      menu_img : "https://source.unsplash.com/1600x900/?food",
>>>>>>> 2e19f0fcf19257cb03d50f339a2abb66f3a53c47
      cost:currentProduct?.cost
    })
    this.editMode = true;
    this.id = id
  }

<<<<<<< HEAD
    //update function
  updateMenu(){
    this.dataservice.updateMenuDetails(this.id, this.form.value).subscribe((result)=>{
=======
  updateForm(){
    this.dataservice.updateMenuDetails(this.productId, this.form.value).subscribe((item)=>{
>>>>>>> 2e19f0fcf19257cb03d50f339a2abb66f3a53c47
      let currentUrl = this.router.url
      this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
    })
  }
<<<<<<< HEAD
=======
  
>>>>>>> 2e19f0fcf19257cb03d50f339a2abb66f3a53c47
}
