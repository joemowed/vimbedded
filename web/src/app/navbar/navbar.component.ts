import { Component, } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ConnectionStateService } from '../connection-state.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  settingsVisible: boolean;
  ConnectionStateService: ConnectionStateService;
  selected = "option2";
  allowedPollingRates: Array<number>;
  selectedPollingRate: Number;
  connectionStatus: String = "test_string";
  private connectionStatus$: Observable<string>;
  constructor(ConnectionStateService: ConnectionStateService) {
    this.settingsVisible = false;
    this.allowedPollingRates = [1, 2, 3, 5, 10, 30, 60, 90, 120, 180, 240, 300, 360];
    this.selectedPollingRate = 5;
    this.ConnectionStateService = ConnectionStateService;
    this.connectionStatus$ = this.ConnectionStateService.connectionStateObservable();


    this.connectionStatus$.subscribe(state => {
      this.connectionStatus = state;
    })

    this.ConnectionStateService.updateConnectionState();
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
