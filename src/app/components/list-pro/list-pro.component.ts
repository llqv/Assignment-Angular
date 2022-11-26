import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {
  products: IProduct[] = []
  cate: any = {
    id: "",
    name: ""
  }
  constructor(private productService: ProductService, private cateService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products);
      for (let idcate of this.products) {
        const id = idcate.categoryId

        this.cateService.getCate(id).subscribe(datacate => {
          console.log(datacate);
          this.cate = datacate
        })
      }
    })
  }
  removeProduct(id: any) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
      alert("Xoa thanh cong");
    })
  }

}
