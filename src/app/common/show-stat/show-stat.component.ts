import { Component } from '@angular/core';

@Component({
  selector: 'app-show-stat',
  templateUrl: './show-stat.component.html',
  styleUrls: ['./show-stat.component.scss']
})
export class ShowStatComponent {
  name: string="";
  selectedDate: Date=new Date;

  submitForm() {
    // Handle form submission logic here
    console.log('Name:', this.name);
    console.log('Selected Date:', this.selectedDate);
  }


  chartOptions = {
    title: {
      text: "Mood in hours"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "10-11",  y: 4  },
        { label: "12-13", y: 3  },
        { label: "15-16", y: 5  },
        { label: "20-21",  y: 4  },
        { label: "22-23",  y: 1  }
      ]
    }]                
  };

  
}
