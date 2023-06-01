import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class ExampleController {
    @Get('/')
    public async example() {
    return 'Hello World!';
    }
}
