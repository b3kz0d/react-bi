import { Module } from '@nestjs/common';
import { DashboardsController } from './dashboards.controller';

@Module({
    imports: [],
    controllers: [ DashboardsController],
    providers: [],
})
export class DashboardsModule {}
