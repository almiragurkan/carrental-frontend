import { Byte } from "@angular/compiler/src/util";

export interface Car {
    carId: number;
    brandName: string;
    colorName: string;
    brandId:number;
    colorId:number;
    modelYear: string;
    dailyPrice: number;
    description: string;
    imagePath?:string;
    model:string;
    minFindeksScore?:number;
  }