import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update-delete',
  templateUrl: './brand-update-delete.component.html',
  styleUrls: ['./brand-update-delete.component.css']
})
export class BrandUpdateDeleteComponent implements OnInit {

  brand: Brand;
  brandUpdateForm: FormGroup;
  brandId:number;
  brandName:string;
  model:string;

  constructor( private brandService: BrandService,
   private activatedRoute: ActivatedRoute,
   private formBuilder: FormBuilder,
   private toastrService: ToastrService,
   private router: Router) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params) => {
     if (params['brandId']) {
       this.getBrandById(params['brandId']);
       this.createBrandForm();
     }
   });
  }

  getBrandById(brandId: number) {
   this.brandService.getById(brandId).subscribe((response) => {
    this.brand = response.data;
    this.brandId= this.brand.brandId
    this.brandName = this.brand.brandName
    this.model=this.brand.model
   });
 }
  createBrandForm() {
   this.brandUpdateForm = this.formBuilder.group({
     brandId: [Validators.required],
     brandName: [Validators.required],
     model:[Validators.required]
   });
 }


  update() {
   if (this.brandUpdateForm.valid) {
    this.brandUpdateForm.addControl("colorId", new FormControl(this.brand.brandId))
     let brandModel = Object.assign({}, this.brandUpdateForm.value);
     this.brandService.update(brandModel).subscribe((response) => {
       this.toastrService.success('Başarılı')
       this.router.navigate(["/brands/list"])
     });
   }
 }
}