import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products'; //JSON Server
  private REST_API_SERVER_MENU = 'http://localhost:3000/menu'; //JSON Server
  constructor(private httpClient: HttpClient) {}
  
  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER); //invokes the GET method of the httpClient so it
                                                             //request to the REST_API_SERVER can send a GET
  }                                                   
  
  public sendGetDetails(id: number) { //declare id as a number
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<any[]>(url); 
  }               
  

  //menu data request-------------------------------------
  public getMenuRequest() { 
    return this.httpClient.get<any[]>(this.REST_API_SERVER_MENU); 
  }         
  
  public sendGetDetailsId(id: number) { 
    const url = `${this.REST_API_SERVER_MENU}/${id}`;
    return this.httpClient.get<any[]>(url); 
  }    
  
}
