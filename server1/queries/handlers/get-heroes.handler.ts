import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';
import { GetHeroRequest, GetHeroResponse, Hero, ListHeroResponse } from '../../interfaces/hero.interface';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}
  private readonly heros: Hero[] = [{ id: 1, name: 'Berkeley', ranking: 1 }, { id: 2, name: 'UCLA', ranking: 2 }];

  async execute(query: GetHeroesQuery) {
    console.log(clc.yellowBright('Async GetHeroesQuery...'));
    console.log('made it to query handler');
    let getRequest = {heros: this.heros[0]};
    console.log(getRequest);
    return getRequest;
  }
}
