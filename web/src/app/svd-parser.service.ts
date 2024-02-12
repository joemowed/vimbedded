import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import xml2js from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class SvdParserService {

  private mainJson: Object;
  public currentLoadedFile: string = "No file Loaded";
  private svdLoadAnnouncer: BehaviorSubject<boolean>;
  constructor() {
    this.mainJson = {};
    this.svdLoadAnnouncer = new BehaviorSubject(false);

  }
  public getSubToSvdLoadAnnouncer(): Observable<boolean> {
    return this.svdLoadAnnouncer.asObservable();
  }
  public getJson() {
    if (this.mainJson) {
      return this.mainJson;
    }
    else {
      return {};
    }
  }
  public parseSvd(svdFile: File) {
    this.currentLoadedFile = svdFile.name;
    svdFile.text().then((data) => { this.parseSvdFromString(data); })
      .catch(console.error)

  }
  private parseSvdFromString(svdString: string) {
    xml2js.parseString(svdString, (err, result) => this.svdParseCallback(err, result, svdString));


  }
  private svdParseCallback(err: Error | null, result: any, fileName: string) {
    if (err) {
      console.error(err);
    }
    else {
      this.mainJson = result;
      this.svdLoadAnnouncer.next(true);
      console.log(this.mainJson);
    }
  }
  public getCurrentFile(): string {
    return this.currentLoadedFile;
  }


  getPeriphrials() {

  }

}
export interface svdJson {
  $: {
    [key: string]: string;
  };
  access: string[];
  addressUnitBits: string[];
  cpu: object[];
  description: string[];
  headerSystemFilename: string[];
  licenseText: string[];
  name: string[];
  resetMask: string[];
  resetValue: string[];
  series: string[];
  size: string[];
  vendor: string[];
  vendorID: string[];
  version: string[];
  width: string[];
  peripherals: string[];
};
