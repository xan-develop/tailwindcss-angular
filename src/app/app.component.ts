import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  title = 'tailwinstrys';
  toggleDarkMode(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');

}

  }


