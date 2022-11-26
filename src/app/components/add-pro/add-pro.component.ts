import { SizeService } from './../../services/size.service';
import { ISize } from './../../models/size';
import { ICate } from './../../models/category';
import { CategoryService } from './../../services/category.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

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
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required])
  })
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cateService: CategoryService,
    private sizeService: SizeService,
    private Router: Router
  ) { }
  ngOnInit(): void {
    this.getSize();
    this.getCate();
    
  }

  // files: File[] = [];

  // onSelect(event: any) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }

  // onRemove(event: any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  getCate() {
    this.cateService.getAllCate().subscribe(dataCate => {
      this.categories = dataCate
    })
  }
  getSize() {
    this.sizeService.getAllSize().subscribe(dataSize => {
      this.sizes = dataSize
    })
  }

  onHandleAdd() {
    if (this.productForm.value.name == "" || this.productForm.value.price == "" || this.productForm.value.category == "" || this.productForm.value.size == "" || this.productForm.value.desc == "") {
      console.log('check form');

    } else {
      this.productService.addProduct(this.product).subscribe(res => {
        console.log(res);
        alert("Thêm sản phẩm thành công");
        this.Router.navigateByUrl("admin")
      },
        err => {
          alert("Sai cái j rồi!!!!")
        })
    }
  }


}
