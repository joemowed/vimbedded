import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class SvdParserService {

  private mainJson: Object;
  constructor() {
    this.mainJson = {};

  }
  public getJson() {
    if (this.mainJson) {
      return this.mainJson;
    }
    else {
      console.error("mainJson retrival attempted without a loaded svg file");
      return "mainJson not loaded";
    }
  }
  public parseSvd(svdString: string) {
    xml2js.parseString(svdString, (err, result) => this.svdParseCallback(err, result));


  }
  private svdParseCallback(err: Error | null, result: any) {
    if (err) {
      console.error(err);
    }
    else {
      this.mainJson = result;
      console.log(`json loaded\n ${this.mainJson}`);
    }
  }


  getPeriphrials() {

  }
}
