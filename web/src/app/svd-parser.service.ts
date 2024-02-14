import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import xml2js from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class SvdParserService {

  private mainJson: SvdJson | null;
  public currentLoadedFile: string = "No file Loaded";
  private svdLoadAnnouncer: BehaviorSubject<boolean>;
  constructor() {

    this.mainJson = null;
    this.svdLoadAnnouncer = new BehaviorSubject(false);

    if (localStorage.getItem("SVDJSON")) {
      this.mainJson = JSON.parse(localStorage.getItem("SVDJSON")!);
      this.currentLoadedFile = localStorage.getItem("SVDJSONFILENAME")!;
      this.svdLoadAnnouncer.next(true);
    }

  }
  public getPeripherials(): Peripheral[] {
    if (!this.mainJson?.peripherals) {
      console.error("attempt to access peripherals without them first existing");
    }
    return this.mainJson!.peripherals;
  }
  public getSubToSvdLoadAnnouncer(): Observable<boolean> {
    return this.svdLoadAnnouncer.asObservable();
  }
  public getJson(): SvdJson {
    if (!this.mainJson) {
      console.error(" tried to get mainJSON, but it is null")
    }
    return this.mainJson!;
  }
  public parseSvd(svdFile: File) {
    this.currentLoadedFile = svdFile.name;
    svdFile.text().then((data) => { this.parseSvdFromString(data, svdFile.name); })
      .catch(console.error)

  }
  private parseSvdFromString(svdString: string, fileName: string) {
    xml2js.parseString(svdString, (err, result) => this.svdParseCallback(err, result, fileName));


  }
  private svdParseCallback(err: Error | null, result: any, fileName: string) {
    if (err) {
      console.error(err);
    }
    else {
      this.mainJson = result;
      try {
        //@ts-ignore
        this.mainJson = this.mainJson.device;
        //@ts-ignore
        this.mainJson.peripherals = this.mainJson.peripherals[0].peripheral;
        this.svdLoadAnnouncer.next(true);
        localStorage.setItem("SVDJSON", JSON.stringify(this.mainJson))

        localStorage.setItem("SVDJSONFILENAME", fileName);
      }
      catch {
        console.error("could not manipulate json from svd file");
      }
    }
  }
  public getCurrentFile(): string {
    return this.currentLoadedFile;
  }



}
export interface SvdJson {
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
  peripherals: Peripheral[];
};
export interface Peripheral {
  addressBlock: AddressBlock[];
  baseAddress: string[];
  groupName: string[];
  interrupt: Interrupt[];
  name: string[];
  prependToName: string[];
  registers: Registers[];
  description: string[];

};
export interface Registers {
  register: Register[];
};
export interface Register {
  addressOffset: string[];
  description: string[];
  name: string[];
  size: string[];
  fields: Field[];
};
export interface Interrupt {
  name: string[];
  value: string[];
};
export interface AddressBlock {
  offset: string[];
  size: string[];
  usage: string[];
};
export interface Field {
  bitOffset: string[];
  bitWidth: string[];
  description: string[];
  name: string[];
};
