import OptionToolbar from './OptionToolbar'
import { Short, Long, Mcq, Trfl, Drop, File, Doc, Img, Linear, Ratio } from './OptionTypes'

const Options = ({ item, idx, active }) => {
	const type = item.type
	const data = item.options
	const questionType = () => {
		switch (type) {
			case 'ratio':
				return <Ratio />
			case 'linear':
				return <Linear />
			case 'img':
				return <Img />
			case 'doc':
				return <Doc />
			case 'file':
				return <File />
			case 'drop':
				return <Drop />
			case 'trfl':
				return data.map((itm, index) => <Trfl itm={itm} key={index} />)
			case 'mcq':
				return data.map((itm, index) => <Mcq itm={itm} key={index} />)
			case 'long':
				return <Long />
			case 'short':
				return <Short />
			default:
				break
		}
	}
	return (
		<div className='options'>
			{idx === active && <OptionToolbar optionType={type} id={idx} />}
			{data && <div className='current-options mt-2'>{questionType()}</div>}
		</div>
	)
}

export default Options
