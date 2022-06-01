import { Injectable } from '@nestjs/common';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';

@Injectable()
export class HeroRepository {
  async findOneById(id: number): Promise<Hero> {
    return userHero; 
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }

  async updateById(id: string): Promise<Hero> {
    // userHero = newHero('1234', 'new name');
    userHero.changeName();
    return userHero;
  }  
}

// all the ways we can interact with database