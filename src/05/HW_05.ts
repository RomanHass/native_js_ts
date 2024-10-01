import { BuildingType, HousesType } from "../02/hw_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<BuildingType>) => {
  return buildings.map(building => building.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
  return houses.map(house => house.address.street.title);
};

export const greetengsMessageForStreets = (houses: Array<HousesType>) => {
  return houses.map(house => `Hello ${house.address.street.title}!`);
};