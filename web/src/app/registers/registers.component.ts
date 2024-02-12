interface RelCoords {
  isInBox: Boolean,
  percentX: number,
  percentY: number
}
import { Component } from '@angular/core';
import { PeriphrialGroupComponent } from './periphrial-group/periphrial-group.component';

import { SvdParserService } from '../svd-parser.service';
@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [PeriphrialGroupComponent],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css'
})
export class RegistersComponent {
  mj = {};
  mouseX: number = 0;
  mouseY: number = 0;

  SvdParserService: SvdParserService;
  constructor(SvdParserService: SvdParserService) {
    this.SvdParserService = SvdParserService;
    this.cardRender();
    document.addEventListener('mousemove', this.onMouseUpdate.bind(this), false);

  }
  cardRender() {
    window.requestAnimationFrame(this.cardRender.bind(this))
    const card = document.getElementById("pokeCardID");
    const selection = window.getSelection();
    const relBefore = this.getRelCoords(card);
    const rel: RelCoords = {
      isInBox: relBefore.isInBox,
      percentX: 2 * (relBefore.percentX - 0.5),
      percentY: 2 * (relBefore.percentY - 0.5)
    };
    if (rel.isInBox) {
      card!.style.transform = this.calculateRotation(30, rel);


    }
    else {
      if (card && ((rel.percentX > 1.2 || rel.percentX < -1.2) || (rel.percentY > 1.2 || rel.percentY < -1.2))) {

        card.style.transform = `rotate3d(0,1,0,0deg) rotate3d(1,0,0,0deg)`
      }

    }


  }
  private getRelCoords(element: HTMLElement | null): RelCoords {
    if (!element) {
      return {
        isInBox: false,
        percentY: -1,
        percentX: -1
      };
    }
    const boundingBox = element.getBoundingClientRect()
    let isInBox = false;
    const relX = (this.mouseX - boundingBox.left) / (boundingBox.width);
    const relY = (this.mouseY - boundingBox.top) / (boundingBox.height);
    isInBox = !((relX < 0 || relY < 0) || (relX > 1 || relY > 1));
    return {
      isInBox: isInBox,
      percentX: relX,
      percentY: relY
    };


  }
  private onMouseUpdate(event: MouseEvent) {

    this.mouseX = event.pageX;
    this.mouseY = event.pageY;

  }
  private calculateRotation(rotationMax: number, rel: RelCoords): string {
    return `rotate3d(0,1,0,${rel.percentX * rotationMax}deg) rotate3d(1,0,0,${rel.percentY * rotationMax * (-1)}deg)`

  }

}

