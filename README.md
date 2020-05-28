# aromi

Library for getting Aromi menu data.

## Example

```ts
import { Aromi } from 'aromi';

const aromi = new Aromi('https://ruokalistat.azurewebsites.net/');

aromi
  .getRestaurants()
  .then((restaurants) => restaurants[0])
  .then((restaurant) => restaurant.menus[0].getData())
  .then((menuData) => console.log(menuData.Name));
```
