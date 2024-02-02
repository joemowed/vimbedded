import { Component, } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  settingsVisible: boolean;
  selected = "option2";
  allowedPollingRates: Array<number>;
  selectedPollingRate: Number;
  constructor() {
    this.settingsVisible = false;
    this.allowedPollingRates = [1, 2, 3, 5, 10, 30, 60, 90, 120, 180, 240, 300, 360];
    this.selectedPollingRate = 5;
  }
  settingsClickHandler() {
    this.settingsVisible = !this.settingsVisible;
  }
  pollingRateClickHandler(rate: Number) {
    this.selectedPollingRate = rate;
  }
  activePollingSelectionCallback(rate: Number) {
    return (rate == this.selectedPollingRate);
  }


}
