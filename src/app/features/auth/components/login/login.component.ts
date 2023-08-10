import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../state/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStore } from '../../state/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm?: FormGroup;

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
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  signIn(): void {
    const response = this.authService.signIn(
      this.signInForm!.value.userName,
      this.signInForm!.value.password
    );

    this.authStore.setAuthState(response.data);
  }
}
