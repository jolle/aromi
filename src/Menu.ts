import axios from 'axios';

export interface MealTranslation {
  LanguageId: number;
  MealType: string;
  Name: string;
}

export interface Item {
  Text: string;
}

export interface Nutrition {
  Name: string;
  Label: string;
  Items: Item[];
}

export interface Meal {
  MealType: string;
  Name: string;
  Price: string;
  Info?: any;
  Translations: MealTranslation[];
  Markings: any[];
  Nutritions: Nutrition[];
}

export interface Day {
  Date: Date;
  WeekDay: string;
  DateStr: string;
  IsVisible: boolean;
  Meals: Meal[];
}

export interface MenuTranslation {
  LanguageId: number;
  Value: string;
}

export interface MenuData {
  Start: Date;
  End: Date;
  Name: string;
  Selected: boolean;
  Days: Day[];
  Translations: MenuTranslation[];
}

export class Menu {
  id: string;
  start: Date;
  end: Date;
  dataUrl: string;

  constructor(id: string, start: Date, end: Date, dataUrl: string) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.dataUrl = dataUrl;
  }

  getData(): Promise<MenuData> {
    return axios.get(this.dataUrl).then(({ data }) => data);
  }
}
