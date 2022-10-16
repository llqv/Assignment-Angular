import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any = {
    name: "",
    price: "",
    desc: "",
    categoryId: "",
    size: "",
    img: "",
    id: ""
  }
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.productService.getProduct(id).subscribe(data => {
        console.log(data);
        this.product = data
        console.log(this.product);

      })
    })
  }

}
