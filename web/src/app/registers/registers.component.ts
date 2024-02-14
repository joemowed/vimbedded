import { Component } from '@angular/core';
import { PeriphrialGroupComponent } from './periphrial-group/periphrial-group.component';
import { Peripheral, SvdParserService } from '../svd-parser.service';
@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [PeriphrialGroupComponent],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css'
})
export class RegistersComponent {
  private SvdParserService: SvdParserService;
  public periphrials: Peripheral[] | null = null;
  constructor(SvdParserService: SvdParserService) {
    this.SvdParserService = SvdParserService;
    this.SvdParserService.getSubToSvdLoadAnnouncer().subscribe((svdLoaded) => this.svdLoadAnnouncerCallback(svdLoaded));
  }
  private svdLoadAnnouncerCallback(svdLoaded: boolean) {
    this.periphrials = this.SvdParserService.getPeripherials()
  }
}
