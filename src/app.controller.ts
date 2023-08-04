import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller decorator is used to make class AppController as a controller
// AppController makes use of a service - AppService
// Concept of DI (Dependency Injection) is used to insert AppService into AppController - by adding constructor parameter of AppService type
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get decorator is used to declare a method that handles HTTP GET
  // getHello method from AppService is used to retrieve data and also return that data as response
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
