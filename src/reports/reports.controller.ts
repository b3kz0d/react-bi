import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get()
  getAll(): string {
    return 'All Reports';
  }

  @Get(':id')
  getReport(): string {
    return 'All Report';
  }

  @Post()
  createReport(): string {
    return 'Create Reports';
  }
  @Put()
  updateReport(): string {
    return 'Update Reports';
  }
  @Delete()
  deleteReport(): string {
    return 'Delete Reports';
  }
}
