import { BuildingType, CityType } from "../02/hw_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(house => house.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<BuildingType>, staffCount: number) => {
  return buildings.filter(buildingStaff => buildingStaff.staffCount > staffCount);
};