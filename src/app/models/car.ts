import { Byte } from "@angular/compiler/src/util";

export interface Car {
    carId: number;
    brandName: string;
    colorName: string;
    brandId:number;
    colorId:number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    imagePath?:string;
    model:string;
  }