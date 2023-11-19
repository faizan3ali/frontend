import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loginForm: FormGroup;
  constructor(private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  
    
  
    onSubmit() {
      if (this.loginForm.valid) {
        // Send a POST request to your Node.js server
        const apiUrl = 'http://localhost:3000/signup'; // Replace with your server URL
        const formData = this.loginForm.value;
  
        this.http.post(apiUrl, formData).subscribe(
          (response) => {
            console.log('Form submitted successfully:', response);
            // You can add any additional logic here, such as redirecting the user or displaying a success message.
          },
          (error) => {
            console.error('Form submission failed:', error);
            // Handle the error, such as displaying an error message to the user.
          }
        );
      }
    }

}
