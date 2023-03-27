import {
	ShortIcon,
	LongIcon,
	McqIcon,
	TrflIcon,
	DropIcon,
	FileIcon,
	DocIcon,
	ImgIcon,
	LinearIcon,
	RatioIcon,
} from '../assets/Icons'

const QUESTION_TYPES = [
	{
		title: 'Written Questions',
		options: [
			{
				title: 'Short Question',
				type: 'short',
				icon: <ShortIcon />,
			},
			{
				title: 'Long Question',
				type: 'long',
				icon: <LongIcon />,
			},
		],
	},
	{
		title: 'Multiple Choice',
		options: [
			{
				title: 'Multiple Answer',
				type: '',
				icon: <McqIcon />,
			},
			{
				title: 'Single Answer',
				type: '',
				icon: <TrflIcon />,
			},
			{
				title: 'Dropdown',
				type: '',
				icon: <DropIcon />,
			},
		],
	},
	{
		title: 'File Upload',
		options: [
			{
				title: 'Any File',
				type: '',
				icon: <FileIcon />,
			},
			{
				title: 'Documents',
				type: '',
				icon: <DocIcon />,
			},
			{
				title: 'Images',
				type: '',
				icon: <ImgIcon />,
			},
		],
	},
	{
		title: 'Scales',
		options: [
			{
				title: 'Linear Scale',
				type: '',
				icon: <LinearIcon />,
			},
			{
				title: 'Ratio Scale',
				type: '',
				icon: <RatioIcon />,
			},
		],
	},
]

export default QUESTION_TYPES
