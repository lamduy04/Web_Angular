import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { Brand } from '../../../types/brand';
import { Category } from '../../../types/category';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  formBuilder=inject(FormBuilder);
  productForm=this.formBuilder.group({
    name: [null,[Validators.required,Validators.minLength(5)]],
    shortDescription: [null,[Validators.required,Validators.minLength(10)]],
    description: [null,[Validators.required,Validators.minLength(50)]],
    price: [null,[Validators.required]],
    discount: [],
    images: this.formBuilder.array([]),
    categoryId: [null,[Validators.required]],
    brandId: [null,[Validators.required]],
  });

  categoryService=inject(CategoryService);
  brandService=inject(BrandService);
  brands:Brand[]=[];
  categories:Category[]=[];
  ngOnInit(){
    this.addImage();
    this.categoryService.getCategories().subscribe((result)=>{
      this.categories=result;
    });
    this.brandService.getBrands().subscribe((result)=>{
      this.brands=result;
    });
  }
  addProduct(){
    let value=this.productForm.value;
    console.log(value);
  }

  addImage(){
    this.images.push(this.formBuilder.control(null));
  }
  removeImage(){
    this.images.removeAt(this.images.controls.length-1);
  }
  get images(){
    return this.productForm.get('images') as FormArray;
  }
}
