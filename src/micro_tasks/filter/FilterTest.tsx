import { useState } from 'react'

// type MoneyType = {
//   banknote: string
//   nominal: string
//   number: string
// }
type FilterType = 'all' | 'dollar' | 'ruble'

export function FilterTest() {
	const [money, setMoney] = useState([
		{ banknote: 'dollar', nominal: 100, number: 'a123456789' },
		{ banknote: 'dollar', nominal: 50, number: 'b123456789' },
		{ banknote: 'ruble', nominal: 100, number: 'c123456789' },
		{ banknote: 'dollar', nominal: 100, number: 'd123456789' },
		{ banknote: 'dollar', nominal: 50, number: 'e123456789' },
		{ banknote: 'ruble', nominal: 100, number: 'f123456789' },
		{ banknote: 'dollar', nominal: 50, number: 'j123456789' },
		{ banknote: 'ruble', nominal: 50, number: 'h123456789' },
	])

  const [nameButton, setNameButton] = useState<FilterType>('all')

	let filterMoney = money;

  if (nameButton === 'dollar') {
    filterMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === nameButton
      )
    }
    if (nameButton === 'ruble') {
      filterMoney = money.filter(
        (filteredMoney) => filteredMoney.banknote === nameButton
        )
      }

	const onClickFilterHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
	}

	return (
		<>
			<ul>
				{filterMoney.map((objFromMoneyArr, index) => {
					return (
						<li key={objFromMoneyArr.number}>
							<span> {objFromMoneyArr.banknote}</span>
							<span> {objFromMoneyArr.nominal}</span>
							<span> {objFromMoneyArr.number}</span>
						</li>
					)
				})}
			</ul>
			<div style={{ marginLeft: '35px' }}>
				<button onClick={() => onClickFilterHandler('all')}>all</button>
				<button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
				<button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
			</div>
		</>
	)
}
