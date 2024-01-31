import { StudentType} from "../02/02"
import { CityType, GovernmentBuildings } from "../02/02_02";

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