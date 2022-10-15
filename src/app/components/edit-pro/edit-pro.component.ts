import { ICate } from './../../models/category';
import { CategoryService } from './../../services/category.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

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
    this.getCate()
    const id = this.ActivatedRoute.snapshot.paramMap.get('id')!
    console.log(id)
    this.productService.getProduct(+id).subscribe(data => {
      console.log(data);
      
      this.product = data
    })
  }
  
  getCate(){
    this.cateService.getAllCate().subscribe(data=>{
      this.categories = data
    })
  }

  onHandleEdit() {
    this.productService.updateProduct(this.product).subscribe(res => {
      console.log(res);
      alert("Sửa thành công");
      this.Router.navigateByUrl("admin")
    },
    err => {
      alert("Sai cái j rồi!!!!")
    })
  }

}
