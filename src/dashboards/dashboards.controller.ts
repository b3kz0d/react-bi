import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { get } from 'http';

@Controller('dashboards')
export class DashboardsController {
  @Get()
  getAll() {
    return 'Get All';
  }
  @Get(':id')
  getDashboard() {
    return 'Get Dashboard';
  }
  @Post()
  createDashboard() {
    return 'Create Dashboard';
  }
  @Put()
  updateDashboard() {
    return 'Update Dashboard';
  }
  @Delete()
  deleteDashboard() {
    return 'Delete Dashboard';
  }
}
