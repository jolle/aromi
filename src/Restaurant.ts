import { Menu } from './Menu';

export class Restaurant {
  id: string;
  name: string;
  menus: Menu[];

  constructor(id: string, name: string, menus: Menu[]) {
    this.id = id;
    this.name = name;
    this.menus = menus;
  }
}
