import { StudentType} from "../02/02"
import { CityType, GovernmentBuildings, HouseType } from "../02/CityType";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}  

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
  return s.address.city.title === cityName;
}

export function addMoneyToBudget(
	buildings: GovernmentBuildings,
	budget: number
) {
  buildings.budget += budget
}

export function repairHouse(house: HouseType) {
  house.repaired = true;
} 

export function toFireStaff(arg0: GovernmentBuildings, arg1: number) {
  arg0.staffCount -= arg1;
} 

export function toHireStaff(build: GovernmentBuildings, num: number) {
  build.staffCount += num;
}