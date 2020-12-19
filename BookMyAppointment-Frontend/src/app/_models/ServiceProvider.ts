export class ServiceProvider{
    spId:number;
    spName:string;
    spEmail:string;
    spPassword:string;
    spPhone:string;
    businessName:string;
    businessAddress:string;
    serviceCategory:{categoryId:number;categoryName:string;};
    city:{cityId:number;cityName:string;};
   // services:[{serviceId:number;serviceName:string;serviceDuration:string;servicePrice:number}];
   // businessHours:[{businessHourId:number;openTime:string;closeTime:string;open:boolean;day:number}];
}