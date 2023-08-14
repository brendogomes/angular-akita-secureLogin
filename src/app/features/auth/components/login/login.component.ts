import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../state/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStore } from '../../state/auth.store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private authStore: AuthStore,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createSignInForm();
  }

  createSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      userName: ['admin', Validators.required],
      password: ['1q2w3E*', Validators.required],
    });
  }

  signIn(): void {
    const response = this.authService.signIn(
      this.signInForm.value.userName,
      this.signInForm.value.password
    );
    this.authStore.setAuthState(response.data);
    this.isLoggedIn = true;
  }
}
