import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  toggleNavbar = true;

  title = 'translator';

  toggleSidebar() {
    this.toggleNavbar  = !this.toggleNavbar;
    document.getElementById("wrapper").classList.toggle("toggled");
   
  }
  
}
