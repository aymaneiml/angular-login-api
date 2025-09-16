import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [SlicePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  userList : any[] = [];

  http = inject(HttpClient);

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe({
      next:(response:any)=>{
        this.userList = response.data;
      },
      error:(error)=>{
        alert('Error -' + error);
      }
    })
  }

}
