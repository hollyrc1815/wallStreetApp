import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @Input() stockObj = { id: '', name: '', ceo: '', price: '', stockexchange: '', turnover: '', website: '' } 
  
  constructor(
    public crudService: CrudService, 
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addStock(data: any) {
    this.crudService.addStock(this.stockObj).subscribe((data: {}) => {
      this.router.navigate(['/list'])
    })
  }

}
