import { Controller, Get, Post, Put, Delete, Param,Body } from '@nestjs/common';
import {DashboardsService} from './dashboards.service'

@Controller('dashboards')
export class DashboardsController {
    constructor(private readonly dashboardService:DashboardsService){        
    } 

    @Get()  
    findAll():any {
        return this.dashboardService.findAll()
    }

    @Get(':id') //'localhost:3000/reports/123
    findOne(@Param('id') id:string) {
       return this.dashboardService.find(id)
    }

    @Post()  
    create(@Body() report:any) {
        return  this.dashboardService.create(report)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() report:any) {
        return this.dashboardService.update(id, report)  
    }

    @Delete(':id') //'localhost:3000/reports/123
    delete(@Param('id') id:string) {
        return this.dashboardService.delete(id)
    }
}
