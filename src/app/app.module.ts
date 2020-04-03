import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms'; 
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CharlyPlateformComponent } from './pages/charly-plateform/charly-plateform.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ContactComponent } from './pages/contact/contact.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { AddAmountComponent } from './pages/add-amount/add-amount.component';
import { QrlinkComponent } from './pages/qrlink/qrlink.component';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { QrcodeService } from './services/qrcode.service';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { DefaultOptions } from 'apollo-client';

import { NgxQRCodeModule } from 'ngx-qrcode2';    
import { NgxSpinnerModule } from "ngx-spinner";
import { concat } from 'rxjs';
import { QrScannerComponent } from './pages/qr-scanner/qr-scanner.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SumPipe } from './sum.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CharlyPlateformComponent,
    QrCodeComponent,
    ContactComponent,
    TransactionComponent,
    AddAmountComponent,
    QrlinkComponent,
    QrScannerComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatRippleModule,
    BrowserAnimationsModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    ZXingScannerModule,
    NgxSpinnerModule ,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [QrcodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private apollo: Apollo, httpLink: HttpLink) {
    const defaultOptions: DefaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
    // const client = new ApolloClient({
    //     link: httpLink.create({ uri: 'http://6fa65f07.ngrok.io' }),
    //     cache: new InMemoryCache(),
    //     defaultOptions: defaultOptions

    // });
    apollo.create({
      link: httpLink.create({ uri: 'https://rewardcharly.com:4000/graphql' }),
      cache: new InMemoryCache(),
       defaultOptions: defaultOptions
    })
   
  }
 }
