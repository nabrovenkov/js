import { Fragment } from "react"

const poem = {
	lines: [
		'I write, erase, rewrite',
		'Erase again, and then',
		'A poppy blooms.',
	],
};

type PoemType = {
	lines: Array<string>
};

type OutputType = {

}

export default function Poem() {
	let output: Array<any> = []
	console.log(output)

	// Fill the output array
	poem.lines.forEach((line, i) => {
		output.push(<hr key={i + '-separator'} />)
		output.push(<p key={i + '-text'}>{line}</p>)
	})
	// Remove the first <hr />
	output.shift()

	return <article>{output}</article>
}


// export default function Poem() {
// 	return (
// 		<article>
// 			{poem.lines.map((line, index: number) => (
// 				<Fragment key={index}>
// 					<p >{line}</p>
					
// 				</Fragment>
// 			))}
			
// 		</article>
// 	)
// }
