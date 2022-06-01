import { AggregateRoot } from '@nestjs/cqrs';

export class Hero extends AggregateRoot {
  constructor(
    private readonly id: number,
    private name: string,
    // private ranking: number
  ) {
    super();
  }

  // killEnemy(enemyId: string) {
  //   // logic
  //   this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  //   console.log(this.name);
  // }

  // addItem(itemId: string) {
  //   // logic
  //   this.apply(new HeroFoundItemEvent(this.id, itemId));
  // }

  changeName() {
    this.name = 'new name';
  }
}