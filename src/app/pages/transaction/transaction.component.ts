import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QrcodeService } from 'src/app/services/qrcode.service';
type Transections = {

}
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  ipAddress: any;
  value: any;
  display = false;
  href: string;
  getQr: any = {};
  userId: any;
  errors: any;
  cashierId: any;
  paymentId:any;
  timerInterval: any;
  getNotificactions: any = {};
  getBalance :any ={}
  balance:any=[];
  userName;
  constructor(private route: Router, private qrservice: QrcodeService, private routes: ActivatedRoute,
    private http: HttpClient) { }
  elementType: 'url' | 'canvas' | 'img' = 'url';
  ngOnInit() {
    localStorage.setItem('dataSource','5e622c3cf542862d378198a9');
    this.userId = localStorage.getItem('dataSource');
    this.userName=localStorage.getItem('userName');
    this.getBalanceById();
  }
  gotomount(){
    this.route.navigate(['/add-amount'])
  }
  request(req){
    localStorage.clear();
    localStorage.setItem('paymentMode',req)
    localStorage.setItem('dataSource',this.userId);
    this.route.navigate(['/add-amount']);

  }
  send(send){
    localStorage.clear();
    localStorage.setItem('paymentMode',send)
    localStorage.setItem('dataSource',this.userId);
    this.route.navigate(['/add-amount']);
  }
  gotoScanner(){
      localStorage.clear();
      localStorage.setItem('dataSource',this.userId);
      this.route.navigate(['/qrScnner',this.userId]);
  }
  getBalanceById() {
      this.qrservice.getBalanceById(this.userId).subscribe(result => {
        this.getBalance= result.data as Transections[];
        this.balance=this.getBalance.balance;
      }, (error) => {
        this.errors = error;
        console.log(this.errors);
      });
   }
}
