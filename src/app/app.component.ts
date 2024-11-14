import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import { LibrosComponent } from './component/libros/libros-list/libros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'librerias-front';
  layoutMode = 'overlay';

  layoutColor = 'light';

  darkMenu = false;

  isRTL = false;

  inputStyle = 'filled';

  ripple = true;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
