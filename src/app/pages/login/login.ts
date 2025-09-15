import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(""),
    Password: new FormControl("")
  });

  http = inject(HttpClient);
  router = inject(Router);

  onLogin(){
    debugger;
    const formValue = this.loginForm.value;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", formValue).subscribe({
      next:(response:any)=>{
        debugger;
        if(response.result) { //l'attribut .result vient de la reponse du backend, qui mentione le message dans reuissite dans "result" et le message d'erreur dans "message"
          alert("Login Success")
          this.router.navigateByUrl("dashbord")
        } else {
          alert(response.message)
        }
      },
      error:(error)=>{
        debugger;
        alert(error.error)
      }
    })
  }
}
