import ts from 'typescript'
import { topCars } from './topCarsArr'

// const cars = topCars
export const MapTest = () => {
	return (
		<>
			<div>Map Test</div>

			<table>
				<tr>
					{topCars.map((car) => {
						return <td>{car.manufacturer}</td>
					})}
				</tr>
				<tr>
					{topCars.map((car) => {
						return <td>{car.model}</td>
					})}
				</tr>
			</table>
	</>
	)
}
