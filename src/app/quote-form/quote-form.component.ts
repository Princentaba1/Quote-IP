import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newquote = new Qoute("","","",new Date(),0,0)
  @Output() addQuote= new EventEmitter<Qoute>();
  submitQuote(){this.addQuote.emit(this.newquote)}

  


  // const nameQuote = document.querySelector("textarea");

  // onTextChange(value:any)
  // {
    
  //   if(this.nameQuote.f(value) <= 0;)
  //   {
  //     alert("Textbox is empty !!!");
  //   }
    
  // }

  ngOnInit(): void {
  }

}
