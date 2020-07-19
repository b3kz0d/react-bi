import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { DashboardsController } from './dashboards/dashboards.controller';
import { DashboardsService } from './dashboards/dashboards.service';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [ReportsModule, DashboardsModule],
  controllers: [AppController, ReportsController, DashboardsController],
  providers: [AppService, ReportsService, DashboardsService],
})
export class AppModule {}
