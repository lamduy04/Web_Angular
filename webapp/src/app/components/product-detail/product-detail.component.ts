import { Component, inject } from '@angular/core';
import { CustomersService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  customerService=inject(CustomersService);
  route=inject(ActivatedRoute);
  product!:Product;
  mainImage!:string;
  ngOnInit(){
    const id=this.route.snapshot.params["id"];
    this.customerService.getProductById(id).subscribe((result)=>{
      this.product=result;
      this.mainImage=this.product.images[0];
      console.log(this.product)
    });
  }

  changeImage(url:string){
    this.mainImage=url;
  }

  get sellingPrice(){
    return Math.round(
    this.product.price - (this.product.price*this.product.discount)/100
  );
  }

  cartService=inject(CartService);
  addToCart(product:Product){
    console.log(product);
    if(!this.isProductInCart(product._id!)){
      this.cartService.addToCart(product._id!,1).subscribe(()=>{
        this.cartService.init();
      })
    }else{
      this.cartService.removeFromCart(product._id!).subscribe(()=>{
        this.cartService.init();
    });
  }
}
  isProductInCart(productId:string){
    if(this.cartService.items.find((x)=>x.product._id==productId)){
      return true;
    } else{
      return false;
    }

  }
}
