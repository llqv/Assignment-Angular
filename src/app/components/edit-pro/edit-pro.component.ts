import { SizeService } from './../../services/size.service';
import { ISize } from './../../models/size';
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
  sizes!: ISize[] | any
  // product: IProduct = new IProduct();
  product: IProduct = {
    name: "",
    price: 0,
    desc: '',
    categoryId: '',
    size: '',
    img: '',
  };
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cateService: CategoryService,
    private sizeService: SizeService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.getCate();
    this.getSize();
    const id = this.ActivatedRoute.snapshot.paramMap.get('id')!
    console.log(id)
    this.productService.getProduct(+id).subscribe(data => {
      console.log(data);
      
      this.product = data
    })
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  getCate(){
    this.cateService.getAllCate().subscribe(data=>{
      this.categories = data
    })
  }
  getSize() {
    this.sizeService.getAllSize().subscribe(dataSize => {
      this.sizes = dataSize
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
