import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService, Stocks } from "../../shared/crud.service";

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  stockObj: any = {};

  // @Input() stockObj2 = {id: this.id, name: '', ceo: '', price: '', stockexchange: '', turnover: '', website: '' } 

  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.crudService.getSingleStock(this.id).subscribe((res: {}) => {
      this.stockObj = res;
      console.log(this.stockObj)
      console.log(this.id);
      console.log("res is " + res)
    })
  }


  updateStock(id, data) {
    if(window.confirm('Yes, please...')){
      console.log("the id your editing is " + id + " or " + this.id)
      console.log("my data is " + data);
      this.crudService.updateStock(this.id, data).subscribe(res => {
        this.router.navigate(['/list'])
      })
    }
  }
  
}