import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charly-plateform',
  templateUrl: './charly-plateform.component.html',
  styleUrls: ['./charly-plateform.component.css']
})
export class CharlyPlateformComponent implements OnInit {
  getId;
  amount;
  constructor(private route: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.amount=localStorage.getItem('amount')
    this.routes.params.subscribe(params => {
      this.getId = params.id;
      this.amount = params.ids;
      console.log(this.amount)
    });
  }
  goQrCode(){
    this.route.navigate(['qr-code']);
  }
}
