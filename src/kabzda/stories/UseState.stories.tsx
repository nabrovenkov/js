import { useState } from 'react';

export default {
	title: 'useState demo',
};

function generateData() {
  //difficult counting
  console.log('generateData')
  return 234561346
}

export const Example1 = () => {
	console.log('Example1');
	const [counter, setCounter] = useState(generateData); // Если у нас сложные вычисления, которые надо положить в useState, то что бы он при отрисовки не делал постоянный пересчет, можно эту функцию сразу положить в useState. Тогда она вернет значение всего один раз

  const changer = (state: number) => {
    return state + 1
  }
  // Можно класть в setCounter так же и функции с вычислениями 
	return (
		<>
			<button onClick={() => setCounter(changer)}>+</button> 
			{counter}
		</>
	);
    
};
