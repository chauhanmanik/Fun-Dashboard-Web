import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
// import { ContentModule } from './content.module';

@Component({
  selector: 'fun-content',
  standalone: true,
  imports: [MatListModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
