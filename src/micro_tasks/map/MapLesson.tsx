import ts from 'typescript'
import { topCars } from './topCarsArr'

// const cars = topCars
export const MapTest = () => {
	return (
		<>
			<div>Map Test</div>

			<table>
				<tr>
					{topCars.map(car => {
						return <th>{car.manufacturer}</th>
					})}
				</tr>
				<tr>
					{topCars.map(car => {
						return <td>{car.model}</td>
					})}
				</tr>
				<tr>
					{topCars.map((car, index: number) => {
						return <td>{index + 1}</td>
					})}
				</tr>
			</table>
		</>
	)
}
