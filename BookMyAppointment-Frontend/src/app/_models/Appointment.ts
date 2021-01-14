export class Appointment {
    consumer:{id:number}
    serviceProvider:{spId:number}
    service:{serviceId:number}
    startDateTime:string
    endDateTime:string

    constructor()
    {
        this.consumer={id:0}
        this.serviceProvider={spId:0}
        this.service={serviceId:0}
        this.startDateTime="19/02/2020 08:00:00"
        this.endDateTime="19/02/2020 09:00:00"
        
    }
    
  }

 