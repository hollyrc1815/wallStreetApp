import { Component, Input, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService, Stocks, StockPrice } from "../../shared/crud.service";
import {MatDialog} from '@angular/material/dialog';
import { DatePipe, formatDate } from '@angular/common'
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AddStockComponent } from "../add-stock/add-stock.component"


interface stock {
  id: string;
  name: string;
  ceo: string;
  price: string;
  stockexchange: string;
  turnover: string;
  website: string;
}

export interface CompanyData {
  Price: string;
  Date: string;
  Time: string;
}
export const PICK_FORMATS = {
  parse: {dateInput: {month: 'numeric', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'numeric'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'yyyy-MMM-dd',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

const ELEMENT_DATA: CompanyData[] = [
  {Price: "1,694,217.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "2,692,396.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "6,719,294.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "2,926,916.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "6,361,691.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "4,666,361.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "9,000,926.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "5,396,719.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "2,217,692.00", Date: '01-02-2020', Time: "8:53"},
  {Price: "7,695,694.00", Date: '01-02-2020', Time: "8:53"},
];

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
]
})
export class StocksListComponent implements OnInit {
 
  selectedValue: any = [];
  Stocks: any = [];

  symbol = 'MCD' 
  date1 = '2017-01-05'
  date2 = '2017-01-10'
 
  public date01 = new Date();
  public date02 = new Date();
 
  loading = false;
  errorMessage = '';
  StockPrices: any = [];

  displayedColumns: string[] = ['Price', 'Date', 'Time'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: CompanyData[] = ELEMENT_DATA;

  constructor(
    public crudService: CrudService,
    public dialog: MatDialog,
    public dialog2: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

 public getStockPrices() {
   this.loading = true;
   this.errorMessage = '';
   this.crudService.getSingleStockPrice(this.symbol, this.date1, this.date2)
    .subscribe((response) => {this.StockPrices = response; console.log("stockPrice respones = " + response)},
    (error) => {
      this.errorMessage = error.message; this.loading = false;
      console.log(this.date01);
      console.log(this.date02);
    },
    () => {this.loading = false;})
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

  openDialog() {
    const dialogRef = this.dialog.open(AddStockComponent);

}


}
