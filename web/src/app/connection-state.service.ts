import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ConnectionStateService {
  public readonly connectionStates = {
    "connected": "connected",
    "disconnected": "disconnected"
  }
  private _connectionState: Subject<string> = new Subject<string>();
  private lastToggle: boolean = false;
  constructor() {
    this._connectionState.next(this.connectionStates.connected)
  }
  public connectionStateObservable() {
    return this._connectionState.asObservable();

  }
  public toggleConnectionState() {
    if (this.lastToggle) {
      this._connectionState.next(this.connectionStates.connected);
    }
    else {
      this._connectionState.next(this.connectionStates.disconnected);
    }
    this.lastToggle = !this.lastToggle;
  }
  public updateConnectionState() {
    this._connectionState.next(this.connectionStates.disconnected);
  }

}
