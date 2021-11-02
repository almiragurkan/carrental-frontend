import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update-delete',
  templateUrl: './brand-update-delete.component.html',
  styleUrls: ['./brand-update-delete.component.css']
})
export class BrandUpdateDeleteComponent implements OnInit {

  brands: Brand;

  brandUpdateForm: FormGroup;



  constructor( private brandService: BrandService,
   private activatedRoute: ActivatedRoute,
   private formBuilder: FormBuilder,
   private toastrService: ToastrService) { }

  ngOnInit(): void {
   this.createBrandUpdateForm();

   this.activatedRoute.params.subscribe((params) => {
     if (params['brandId']) {
       this.getBrandById(params['brandId']);
     }
   });
  }

  getBrandById(brandId: number) {
   this.brandService.getById(brandId).subscribe((response) => {
     this.brands = response.data[0];

     this.createBrandUpdateForm();
   });
 }
  createBrandUpdateForm() {
   this.brandUpdateForm = this.formBuilder.group({
     brandId: [this.brands.brandName, Validators.required],
     brandName: [this.brands.brandName, Validators.required],
     model:[this.brands.model, Validators.required]
   });
 }



 update() {
   if (this.brandUpdateForm.valid) {
     let brandModel = Object.assign({}, this.brandUpdateForm.value);
     this.brandService.update(brandModel).subscribe((response) => {
       this.toastrService.success(response.message, 'Başarılı');
     });
   }
 }
}