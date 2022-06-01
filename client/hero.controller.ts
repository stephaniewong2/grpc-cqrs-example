import { Controller, Get, Post, Param } from '@nestjs/common';
import { GrpcClient, RpcClient, Service } from '@nestcloud/grpc';
import { HeroService } from './interfaces/hero-service.interface';
import { join } from 'path';
import { GetHeroResponse, Hero, ListHeroResponse } from './interfaces/hero.interface';

@Controller('/heros')
export class HeroController {
    constructor(
        // private readonly commandBus: CommandBus, 
    ) {}

    @RpcClient({
        service: 'rpc-server',
        package: 'hero',
        protoPath: join(__dirname, './interfaces/hero-service.proto'),
    })
    private readonly client: GrpcClient;
    @Service('HeroService', {
        service: 'rpc-server',
        package: 'hero',
        protoPath: join(__dirname, './interfaces/hero-service.proto'),
    })
    private heroService: HeroService;

    @Get('/:heroId')
    async get(@Param('heroId') heroId: number): Promise<GetHeroResponse> {
        console.log('GET REQUEST BY HERO ID');
        const data = await this.heroService.get({ id: heroId }).toPromise();
        console.log(data);
        console.log('GET COMPLETE');
        return data;
    }

    @Get('/')
    async list(): Promise<ListHeroResponse> {
        console.log('GET ALL');
        const data = await this.heroService.list({}).toPromise();
        console.log(data);
        return data;
    }

    @Post('/post')
    async post(@Param('heroId') heroId: number) { 
        console.log('POST REQUEST');
        const data = await this.heroService.post({id: heroId }).toPromise();
        console.log(data);
        console.log('POST COMPELTE');
        return data;
    }
}
