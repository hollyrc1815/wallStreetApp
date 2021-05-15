import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'add', component: AddStockComponent  },
  { path: 'edit/:id', component: EditStockComponent  },
  { path: 'list', component: StocksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
