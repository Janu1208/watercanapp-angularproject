import { Component, OnInit } from '@angular/core';
import { UpdatestockService } from '../core/updatestock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  updateCan:any;

  constructor(private updateService:UpdatestockService,private router:Router) { }

  ngOnInit() {
  }
  updateStock()
  {
let formData:any={
  'updatecans':this.updateCan
};
this.updateService.stockUpdate(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
  alert('update success');
  this.router.navigate(['./adminhome']);
   
},(err)=>{
console.log('error=>'+JSON.stringify(err));
alert(err.error.message);
});
}
}
