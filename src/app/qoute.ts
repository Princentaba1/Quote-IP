export class Qoute {
    showDescription:boolean;
    constructor(public quote:string, public author:string, public name:string,public completeDate: Date,public like:number, public dislike:number){this.showDescription=false;}
}

