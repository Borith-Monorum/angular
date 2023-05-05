import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BidingComponent } from './tutorial/biding/biding.component';
import { DirectiveComponent } from './tutorial/directive/directive.component';
const routes: Routes = [
// {path: '', component: BidingComponent },
{path: 'biding', component: BidingComponent},
{path: 'directive', component: DirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
