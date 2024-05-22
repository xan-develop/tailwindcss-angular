import { Component } from '@angular/core';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrl: './grids.component.css'
})
export class GridsComponent {
  toggleDarkMode(event: Event): void {
    document.documentElement.classList.toggle('dark');
}
}
