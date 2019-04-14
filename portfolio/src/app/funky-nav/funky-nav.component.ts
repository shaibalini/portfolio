import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-funky-nav',
  templateUrl: './funky-nav.component.html',
  styleUrls: ['./funky-nav.component.scss']
})
export class FunkyNavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  home():void{
    this.route.navigate(['/']);
  }
  tech():void{
    this.route.navigate(['/tech']);
  }
  extra():void{
    this.route.navigate(['/extra']);
  }
  contact():void{
    this.route.navigate(['/contact']);
  }
}
