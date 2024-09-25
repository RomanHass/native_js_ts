import { BuildingType, HousesType } from "../02/hw_02";

export const addMoneyToBudget = (building: BuildingType, budget: number) => {
  building.budget += budget; 
};

export const repairHouse = (house: HousesType) => {
  house.repaired = true;
};

export const toFireStaff = (building: BuildingType, staffCount: number) => {
  building.staffCount -= staffCount;
};

export const toHireStaff = (building: BuildingType, staffCount: number) => {
  building.staffCount += staffCount;
};