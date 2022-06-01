import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { GetHeroRequest, GetHeroResponse, GetHeroRank, Hero, ListHeroResponse } from '../../interfaces/hero.interface';


@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> { // need to use ICommandHnadler with CommandHandler
  constructor(
    // private readonly repository: HeroRepository, 
    // private readonly publisher: EventPublisher, 
  ) {}
  private readonly heros: Hero[] = [{ id: 1, name: 'Berkeley', ranking: 1 }, { id: 2, name: 'UCLA', ranking: 2 }];

  async execute(command: KillDragonCommand) { 
    console.log(clc.greenBright('KillDragonCommand...'));

    const { heroId, dragonId } = command;
    this.heros[0].name = 'fake post';
    return { heros: this.heros};
  }
}
