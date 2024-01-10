import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // by default power service cannot be accessed by any other service.
  exports: [PowerService], // add it in the list of exports to make it availbale outside the service
})
export class PowerModule {}
