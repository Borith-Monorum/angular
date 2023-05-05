import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.scss']
})
export class BidingComponent {
// Two way binding
    // example 1
          title: string = '';
          twowaybiding=
          `
          <input type="text"  [(ngModel)]="title">
          <h1>Result {{title}}</h1>
          `
    // example 1
// Two way binding


// Event binding
    // example 1
          onewaybiding= "this is event"
          showonewaybiding=
          `
          <h2>Result is: {{onewaybiding}}</h2>
          `
          showonewaybidingts=
          `
          onewaybiding= "this is event"
          `
    // example 1

    // example 2
          click1:string ="";
          onclick1(){
          this.click1 = "clicked"
          }
          show_html_1=
          `
          <h2>You are: {{testclick}}</h2>
          <button (click)="onclick()" mat-raised-button>Click me</button>
          `
          show_ts_1 =
          `
          testclick:string ="";
          onclick(){
          this.testclick = "clicked"
          }
          `

         //click using boolean
          click2:boolean= true;
          onclick2(){
            this.click2 = !this.click2;
          }
          show_html_2=`
                        <button (click)="onclick1()" mat-raised-button>Click me</button>
                        <h2>Result is : {{testclick1 ? '1' : '2'}}</h2>
                      `
          show_ts_2 = `
                        testclick1:boolean= true;
                        onclick1(){
                          this.testclick1 = !this.testclick1;
                        }
                      `
          //click using boolean

          // click using loop
          click3:number =1;
          onclick3(){
            this.click3++;
          }
          onclick3_(){
            this.click3--
          }
          show_html_3=`
                        <button mat-raised-button (click)="onclick2()">Add</button>
                        <button mat-raised-button (click)="onclick2_()">remove</button>
                        <h2>Result is : {{click3}}</h2>
                      `
          show_ts_3=  `
                        click3:number =1;
                        onclick2(){
                          this.click3++;
                        }
                        onclick2_(){
                          this.click3--
                        }
                      `

          // click using loop
    // example 2
// Event binding

// style binding
    // style  declear from typescript
          color="green";
          bgcolor="red";
    // style  declear from typescript


    //style  declear from typescript
          err:boolean= true;
          onclick4(){
          this.err = !this.err;
          }
    //style  declear from typescript


    // html
      show_html_4=`
            <h2 [style.color]="color">Test color</h2>
            <h2 [style.backgroundColor]="bgcolor">Test background</h2>
            `
      show_html_5=`
            <h2 [style.backgroundColor]="err ?  'green' : 'red'">Test background</h2>
            <button mat-raised-button (click)="onclick4()">orange</button>`
    // html

    // typescript
      show_ts_4=`
            color="green";
            bgcolor="red";
            `
      show_ts_5=`
            err:boolean= true;
            onclick4(){
            this.err = !this.err;
            }
            `
    // typescript

// style binding
}
