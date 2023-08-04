import { Injectable } from '@nestjs/common';

// AppService is a service class which can be injected in a controller
// For this, @Injectable decorator is added

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
