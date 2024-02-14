import { Component, Input, OnInit } from '@angular/core';
import { Register } from '../../../svd-parser.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Input({ required: true }) register!: Register;

  public reg: Register | null = null;
  ngOnInit(): void {
    this.reg = this.register;
    console.log(this.reg);
  }


  constructor() {

  }
}
