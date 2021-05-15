import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService, Stocks } from "../shared/crud.service";

interface stock {
  id: string;
  name: string;
  ceo: string;
  price: string;
  stockexchange: string;
  turnover: string;
  website: string;
}

@Component({
  selector: 'app-stock-picker',
  templateUrl: './stock-picker.component.html',
  styleUrls: ['./stock-picker.component.css']
})
export class StockPickerComponent implements OnInit{

  selectedValue: any = [];
  show = false;
  Stocks: any = [];

  constructor(
    public crudService: CrudService,
    public dialog: MatDialog,
    public dialog2: MatDialog
  ) { }

  ngOnInit() {
    this.fetchStocks();
  }

  fetchStocks() {
    return this.crudService.getAllStocks().subscribe((res: {}) => {
      this.Stocks = res;
    })
  }

  delete(id) {
    if (window.confirm('Really?')){
      this.crudService.deleteStock(id).subscribe(res => {
        this.fetchStocks()
      })
    }
  }

}
