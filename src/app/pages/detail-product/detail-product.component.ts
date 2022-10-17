import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SizeService } from 'src/app/services/size.service';

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
  size: any = {
    id: "",
    name: ""
  }
  constructor(private productService: ProductService, private route: ActivatedRoute, private sizeService: SizeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.productService.getProduct(id).subscribe(data => {
        console.log(data);
        this.product = data
        console.log(this.product);
        this.sizeService.getSize(this.product.id).subscribe(size => {
          this.size = size
        })
      })
    })
  }

}
