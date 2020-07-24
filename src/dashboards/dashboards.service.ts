import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardsService {
    private readonly data=[
        {
            id:"1",
            name:'dashboard1',
            type:'kpi'
         },
         {
            id:"2",
            name:'dashboard1',
            type:'growth'
         },
         {
            id:"3",
            name:'dashboard1',
            type:'table'
         }
    ] 

    findAll():any {
        return this.data;
    }

    find(id:string):any {
        return this.data.find(item=>item.id==id);
    }

    create(report:any):any{
        this.data.push(report)
        return report
    }

    update(id:string, report:any):any{
        let foundDashboard=this.data.find(item=>item.id==id)
        foundDashboard.name= report.name
        foundDashboard.type= report.type

        return foundDashboard;
    }

    delete(id:string):any{
        delete this.data[this.data.findIndex(item => item.id == id)];
        return `removed dashboard by id ${id}`
    }
}
