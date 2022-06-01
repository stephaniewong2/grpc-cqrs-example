import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { GetHeroRequest, GetHeroResponse, GetHeroRank, Hero, ListHeroResponse } from './interfaces/hero.interface';
import { GetHeroesQuery } from './queries/impl';

@Controller()
export class HeroController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}
    private readonly heros: Hero[] = [{ id: 1, name: 'Berkeley', ranking: 1 }, { id: 2, name: 'UCLA', ranking: 2 }];

    @GrpcMethod('HeroService')
    async get(): Promise<Hero> {
        console.log('server1 get invoked');
        console.log('going to queryBus');
        let data = await this.queryBus.execute(new GetHeroesQuery());
        console.log(data);
        console.log('CQRS GET successful');
        return data;
    }

    @GrpcMethod('HeroService')
    list(): ListHeroResponse {
        console.log('server1 list invoked');
        return { heros: this.heros };
    }

    @GrpcMethod('HeroService')
    async post(): Promise<Hero[]> {
        console.log('going to commandBus');
        let data = await this.commandBus.execute(new KillDragonCommand('1', '2'));
        console.log('CQRS POST successful');
        return data;
    }

    // @GrpcMethod('HeroService')
    // get(data: GetHeroRequest): GetHeroResponse {
    //     console.log('server1 get invoked');
    //     return {
    //         hero: this.heros.find(({ id }) => id === data.id),
    //     };
    // }

    // @GrpcMethod('HeroService')
    // rank(data: GetHeroRank): GetHeroResponse {
    //     console.log('server1 get invoked');
    //     return {
    //         hero: this.heros.find(({ ranking }) => ranking === data.ranking),
    //     };
    // }    

}
