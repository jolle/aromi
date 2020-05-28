import axios from 'axios';
import { Restaurant } from './Restaurant';
import { Menu } from './Menu';
import { prependProtocol } from './helpers';

export class Aromi {
  private initialData: Promise<any>;

  constructor(server: string) {
    const dataUrl = /var aromiLink = '([^']+)';/;

    this.initialData = axios
      .get(server)
      .then(({ data }) => {
        if (!dataUrl.test(data)) throw Error('Invalid server response');
        return data.match(dataUrl)[1];
      })
      .then(prependProtocol)
      .then((url) => axios.get(url).then(({ data }) => data));
  }

  getRestaurants(): Promise<Restaurant[]> {
    return this.initialData.then((data) =>
      data.Restaurants.map(
        (restaurant: any) =>
          new Restaurant(
            restaurant.RestaurantId,
            restaurant.Name,
            restaurant.JMenus.map(
              (menu: any) =>
                new Menu(
                  menu.MenuId,
                  new Date(menu.Start),
                  new Date(menu.End),
                  prependProtocol(menu.LinkUrl)
                )
            )
          )
      )
    );
  }
}
