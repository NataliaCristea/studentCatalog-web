import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {CookieService} from '../service/cookie.service';
import {LoginRequest} from '../model/LoginRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  loginFormGroup: FormGroup;
  showLoginForm = true;
  showRecoveryForm = false;

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private readonly formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeLoginFormGroup();
  }

  showRecoverForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showRecoveryForm = !this.showRecoveryForm;
  }

  onLogin() {
    if (this.loginFormGroup.valid) {
      const loginRequest: LoginRequest = {
        username: this.loginFormGroup.get('username').value,
        password: this.loginFormGroup.get('password').value
      };
      this.authService.login(loginRequest).subscribe(registerResponse => {
        this.router.navigate(['/home']);
        this.cookieService.saveJWTCookie(registerResponse.jwt);
      });
    }
  }
  private initializeLoginFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
