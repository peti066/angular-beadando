import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entermood',
  templateUrl: './entermood.component.html',
  styleUrls: ['./entermood.component.scss']
})
export class EntermoodComponent {
  hours: number[] = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedNumbers: {[key: number]: number}={};
  userName: string="";

  constructor(private http: HttpClient) {}
  submitForm() {
    for (const key of Object.keys(this.selectedNumbers)) {
    const hour = Number(key); 
    const formData = {
      user: this.userName,
      mood: this.selectedNumbers[hour],
      intervall: hour,
      timestamp: Date.now()
    }
    this.http.post<any>('http://localhost:3000/posts', formData)
      .subscribe(
        response => {
          console.log('Data sent successfully!', response);
          // Perform any additional actions after successful data submission
        },
        error => {
          console.error('Error sending data:', error);
          // Handle any errors that occur during data submission
        }
      );
    };
  }
  
}