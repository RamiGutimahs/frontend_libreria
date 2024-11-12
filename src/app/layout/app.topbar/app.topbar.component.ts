import { Component } from '@angular/core';
import {AppMainComponent} from '../app.main/app.main.component';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app.topbar.component.html',
  styleUrl: './app.topbar.component.scss'
})
export class AppTopbarComponent {

  constructor(public appMain: AppMainComponent) {}

}