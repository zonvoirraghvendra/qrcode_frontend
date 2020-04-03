import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { AddAmountComponent } from './pages/add-amount/add-amount.component';
import { QrlinkComponent } from './pages/qrlink/qrlink.component';
import { QrScannerComponent } from './pages/qr-scanner/qr-scanner.component';
import { CharlyPlateformComponent } from './pages/charly-plateform/charly-plateform.component';

const routes: Routes = [
  //{path:'transaction' , component:LoginComponent},
  {path:'' , component:TransactionComponent},
  {path:'contact' , component:ContactComponent},
  {path:'add-amount' , component:AddAmountComponent},
  {path:'qrlink/:id' , component:QrlinkComponent},
  {path:'qr-code/:id' , component:QrCodeComponent},
  {path:'qrScnner/:id' , component:QrScannerComponent},
  {path:'notification/:id/:ids', component:CharlyPlateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
