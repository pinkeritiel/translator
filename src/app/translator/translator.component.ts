import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

 myBrowserLang: string = "";
 languages: language[];
 selectedLanguage : language;

//@ViewChild("starttag") starttag: ElementRef;
    constructor(public translate: TranslateService, element: ElementRef) {
      translate.addLangs(['en','iw','fr']);
      this.languages=[
        {symbol:"en",name:"english"},
        {symbol:"iw",name:"hebrew"},
        {symbol:"fr",name:"french"}
      ];
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        this.myBrowserLang = this.languages.find(e => e.symbol === browserLang).name;
        translate.use(browserLang.match(/en|fr|iw/) ? browserLang : 'en');
    }

  ngOnInit() {
  }
changeLang(e){
  this.translate.use(this.selectedLanguage.symbol);
  console.log('The language selected is:' + this.selectedLanguage.name);
  document.dir = "";
  if (this.selectedLanguage.symbol==='iw'){
    document.dir = "rtl";
    var divs = document.documentElement.querySelectorAll('.text-left');
    [].forEach.call(divs, function(div){
      div.classList.remove('text-left');
      div.classList.add('text-right');
    });
  } else {
    var divs = document.documentElement.querySelectorAll('.text-right');
    [].forEach.call(divs, function(div){
      div.classList.remove('text-right');
      div.classList.add('text-left');
    });
  }
}
}
interface language{
  symbol: string;
  name: string;
}
