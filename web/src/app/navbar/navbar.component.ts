import { Component, } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ConnectionStateService } from '../connection-state.service';
import { Observable } from 'rxjs';
import { SvdParserService } from '../svd-parser.service';
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
  SvdParserService: SvdParserService;
  selected = "option2";
  allowedPollingRates: Array<number>;
  selectedPollingRate: Number;
  svdLoadAnnouncer$: Observable<boolean>;
  connectionStatus: String = "disconnected";
  deviceName: String = "";
  private connectionStatus$: Observable<string>;
  constructor(ConnectionStateService: ConnectionStateService, SvdParserService: SvdParserService) {
    this.settingsVisible = false;
    this.allowedPollingRates = [1, 2, 3, 5, 10, 30, 60, 90, 120, 180, 240, 300, 360];
    this.selectedPollingRate = 5;
    this.ConnectionStateService = ConnectionStateService;
    this.connectionStatus$ = this.ConnectionStateService.connectionStateObservable();
    this.SvdParserService = SvdParserService;
    this.svdLoadAnnouncer$ = this.SvdParserService.getSubToSvdLoadAnnouncer();
    this.svdLoadAnnouncer$.subscribe((svdLoaded) => this.svdLoadAnnouncerCallback(svdLoaded));

    this.connectionStatus$.subscribe(state => {
      this.connectionStatus = state;
    })


  }
  stopPropagationOnClick(event: Event) {
    event.stopPropagation();
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
  settingsUnfocusClickHandler() {
    this.settingsVisible = false;
  }

  public onFileSelected(event: any) {
    const svdFile: File = event.target.files[0];
    if (svdFile) {
      this.SvdParserService.parseSvd(svdFile);
    }
  }
  private svdLoadAnnouncerCallback(svdLoaded: boolean) {
    if (svdLoaded) {
      this.deviceName = this.SvdParserService.getJson().name[0];
    }
    else {
      this.deviceName = "No Device Loaded";
    }
  }


}
