import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  title = 'HELLO-WORLD';
  imgUrl =
    'https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75';
  url = 'https://www.bridgelabz.com/';

  userName: string = '';
  onClick() {
    window.open(this.url, '_blank');
  }

  ngOnInit(): void {
    this.title = ' from BridgeLabz';
  }
}
