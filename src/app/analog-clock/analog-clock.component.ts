import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})

export class AnalogClockComponent implements OnInit {


  @ViewChild('hrHand', { static: false }) hrHand: ElementRef;
  @ViewChild('minHand', { static: false }) minHand: ElementRef;
  @ViewChild('secHand', { static: false }) secHand: ElementRef;
  @ViewChild('curDay', { static: false }) curDay: ElementRef;
  @ViewChild('curMonth', { static: false }) curMonth: ElementRef;
  @ViewChild('curYear', { static: false }) curYear: ElementRef;

  dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor() {


  }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateClock(date);
    }, 1000);
  }


  updateClock(date) {
    this.secHand.nativeElement.style.transform = 'rotate(' +
      date.getSeconds() * 6 + 'deg)';
    this.minHand.nativeElement.style.transform = 'rotate(' +
      date.getMinutes() * 6 + 'deg)';
    this.hrHand.nativeElement.style.transform = 'rotate(' +
      (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';

    this.curDay.nativeElement.innerHTML = this.dayNames[date.getDay()];
    this.curMonth.nativeElement.innerHTML = this.monthNames[date.getMonth()];
    this.curYear.nativeElement.innerHTML = date.getFullYear();
  }
}
