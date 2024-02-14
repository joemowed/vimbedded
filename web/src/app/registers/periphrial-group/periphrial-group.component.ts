import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { Peripheral } from '../../svd-parser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-periphrial-group',
  standalone: true,
  imports: [RegisterComponent, CommonModule],
  templateUrl: './periphrial-group.component.html',
  styleUrl: './periphrial-group.component.css'
})
export class PeriphrialGroupComponent implements OnInit {
  @Input({ required: true }) periphrial!: Peripheral;
  public name: string = "";
  public baseAddress: string = "";
  public description: string = "";
  public isExpanded: boolean = false;
  //public baseAddress: string;
  ngOnInit(): void {
    this.description = this.periphrial.description[0];
    this.name = this.periphrial.name[0];
    this.baseAddress = this.periphrial.baseAddress[0];
  }
  public groupTitleBarClickHandler() {
    this.isExpanded = !this.isExpanded;

  }



}
