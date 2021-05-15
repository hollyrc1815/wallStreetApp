import { Component, OnInit } from '@angular/core';

export interface CompanyData {
  Price: string;
  Date: string;
  Time: string;
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
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {

  displayedColumns: string[] = ['Price', 'Date', 'Time'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: CompanyData[] = ELEMENT_DATA;

  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }

  // shuffle() {
  //   let currentIndex = this.columnsToDisplay.length;
  //   while (0 !== currentIndex) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // Swap
  //     let temp = this.columnsToDisplay[currentIndex];
  //     this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
  //     this.columnsToDisplay[randomIndex] = temp;
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
