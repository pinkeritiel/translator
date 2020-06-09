import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { AboutComponent } from './about/about.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,  NgbModule,  HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule ],
  declarations: [ AppComponent,  AboutComponent, TranslatorComponent, NavigatorComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}