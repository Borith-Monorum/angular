import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BidingComponent } from './tutorial/biding/biding.component';
import { DirectiveComponent } from './tutorial/directive/directive.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BidingComponent,
    DirectiveComponent,

  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    MatDividerModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    // PrismModule,
  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ],a
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule {

}

