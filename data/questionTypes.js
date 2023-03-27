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
				type: 'mcq',
				icon: <McqIcon />,
			},
			{
				title: 'Single Answer',
				type: 'trfl',
				icon: <TrflIcon />,
			},
			{
				title: 'Dropdown',
				type: 'drop',
				icon: <DropIcon />,
			},
		],
	},
	{
		title: 'File Upload',
		options: [
			{
				title: 'Any File',
				type: 'file',
				icon: <FileIcon />,
			},
			{
				title: 'Documents',
				type: 'doc',
				icon: <DocIcon />,
			},
			{
				title: 'Images',
				type: 'img',
				icon: <ImgIcon />,
			},
		],
	},
	{
		title: 'Scales',
		options: [
			{
				title: 'Linear Scale',
				type: 'linear',
				icon: <LinearIcon />,
			},
			{
				title: 'Ratio Scale',
				type: 'ratio',
				icon: <RatioIcon />,
			},
		],
	},
]

export default QUESTION_TYPES
