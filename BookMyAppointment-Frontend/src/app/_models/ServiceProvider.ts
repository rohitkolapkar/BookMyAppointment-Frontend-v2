import { BusinessHour } from "./BusinessHour"
import { City } from "./City"
import { Service } from "./Service"
import { ServiceCategory } from "./ServiceCategory"

export class ServiceProvider{
    spId:number
    spEmail: string
    spName: string
    spPhone: string
    spPassword: string
    businessName: string
    businessAddress:string
    serviceCategory: ServiceCategory
    city: City
    services: Service[]
    businessHours: BusinessHour[]

    constructor()
    {
        this.spEmail = null
        this.spName=null
        this.spPhone= null
        this.spPassword=null
        this.businessName= null
        this.businessAddress=null
        this.serviceCategory={categoryId:0,categoryName:""};
        this.city={cityId:0,cityName:""}
    }
    
}