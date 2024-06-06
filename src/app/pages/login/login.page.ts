import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }
  login() {
    this.router.navigate(['home']);
  }
  register() {
    this.router.navigate(['register']);
  }

}
