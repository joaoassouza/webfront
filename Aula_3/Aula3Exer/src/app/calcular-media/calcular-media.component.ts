import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})

export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  af: number = 0;
  ag: number = 0;
  media: number = 0;

  constructor() {}

  calcularMedia(): void {
    this.media = (this.ac1 + this.ac2 + this.af + this.ag) / 4;
  }
}
