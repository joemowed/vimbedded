import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-periphrial-group',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './periphrial-group.component.html',
  styleUrl: './periphrial-group.component.css'
})
export class PeriphrialGroupComponent {

}
