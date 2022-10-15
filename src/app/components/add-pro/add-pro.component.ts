import { ICate } from './../../models/category';
import { CategoryService } from './../../services/category.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  categories!: ICate[] | any
  // product: IProduct = new IProduct();
  product: IProduct = {
    name: "",
    price: 0,
    desc: '',
    categoryId: '',
    img: '',
  };
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cateService: CategoryService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.getCate();
  }
  
  getCate(){
    this.cateService.getAllCate().subscribe(data=>{
      this.categories = data
    })
  }

  onHandleAdd() {
    this.productService.addProduct(this.product).subscribe(res => {
      console.log(res);
      alert("Đăng ký thành công");
      this.Router.navigateByUrl("admin")
    },
    err => {
      alert("Sai cái j rồi!!!!")
    })
  }

}
