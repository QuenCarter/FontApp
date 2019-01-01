import { Component, Input, OnInit } from '@angular/core';
import { IFont } from './fonts/font'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'font-app';
  textForFont : string;
  categorySet = new Set();
  checkedFonts : string[] = [];
  filteredFonts :IFont[] =[];
  fontSize : number;
  fonts : IFont[] = [
    {
      "Name" : "Chapter One",
      "Category": "Script"      
    },
    {
      "Name" : "Claudina",
      Category: "Bold"
    },
    {
      "Name" : "Chapter One",
      Category: "Script"      
    },
    {
      "Name" : "Claudina",
      Category: "Bold"
    },
    {
      "Name" : "Chapter One",
      Category: "Script"      
    },
    {
      "Name" : "Claudina",
      Category: "Bold"
    },
    {
      "Name" : "Chapter One",
      Category: "Script"      
    },
    {
      "Name" : "Claudina",
      Category: "Bold"
    }   
  ];

  ngOnInit()  {
    this.fonts.forEach(font => {
      this.categorySet.add(font.Category);
    });   
    this.filteredFonts = this.fonts;
    this.fontSize=25;
   
    
  }
  filterFontCards(checkBoxCategory : string)
  {
    let checkbox = <HTMLInputElement>document.getElementById(`${checkBoxCategory}_checkBox`);
    if (checkbox.checked ){
      this.checkedFonts.push(checkBoxCategory)
    }
    else{
      this.checkedFonts.splice(this.checkedFonts.indexOf(checkBoxCategory), 1);
    }
    this.filteredFonts = this.fonts.filter(font => this.checkedFonts.indexOf(font.Category) > -1);
  }
  adjustFontSize(){
   let size = <HTMLInputElement>document.querySelector("#fontSize"); 
   this.fontSize= +size.value;

   }
   showValueToDisplay(): string{
    if (this.textForFont == null || this.textForFont === ""){
      return "Preview";
    }else{
      return this.textForFont;
    }    
   }

  
}
