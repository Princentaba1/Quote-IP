import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Qoute[] =[
    new Qoute("I have a dream that my four children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.","Martin Luther King, Jr","Prince Ntaba",new Date(1963,3,14),0,0),
    new Qoute("Success is a lousy teacher it seduces smart people into thinking they cant lose.","Bill Gates","Prince Ntaba",new Date(1990,8,1),0,0),
  ];
  constructor() { }
  addNewQuote(quote:any){
    this.quotes.push(quote);
}
upVote(index:number){
  this.quotes[index].like++;
}
downVote(index:number){
  this.quotes[index].dislike++;
}




toggleDetails(index:number){
  this.quotes[index].showDescription=!this.quotes[index].showDescription;
}

  ngOnInit(): void {
  }

}
