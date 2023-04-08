import sample from 'assets/sample.png'

const FETCHED_QUESTIONS = [
	{
		_id: '123e4567-e89b-12d3-a456-426652340000',
		image: sample,
		title: "Are you smarter than world's smartest ape?",
		description:
			"To say that Kanzi, a Bonobo ape that resides at The Great Ape Sanctuary outside Des Moines, Iowa, is smarter than a human bady toddler, may be understating this matter. It's because of the",
		questions: [
			{
				title: 'Sample Question One : Short Question',
				description: 'Sample Question One Description, it is Optional',
				type: 'short',
				options: [],
			},
			{
				title: 'Sample Question Two : Long Question',
				description: 'Sample Question Two Description, it is also Optional',
				type: 'long',
				options: [],
			},
			{
				title: 'Sample Question Three : MCQ Question',
				description: 'Sample Question Three Description, it is Optional',
				type: 'mcq',
				options: [
					{
						title: 'Choice One Title',
						name: 'one',
					},
					{
						title: 'Choice Two Title',
						name: 'two',
					},
				],
			},
			{
				title: 'Sample Question Four : True/False Question',
				description: 'Sample Question Four Description, it is also Optional',
				type: 'trfl',
				options: [
					{
						title: 'Option Title (True)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
				],
			},
		],
	},
	{
		_id: '4567123e-e89b-12d3-a456-426652340000',
		image:
			'https://firebasestorage.googleapis.com/v0/b/exmanst.appspot.com/o/cl8n7bukz0000k9wg7vblmelr%2Fscreenshot.jpg?alt=media&token=609bd5a6-9d8a-42eb-99f6-7fb8162b8294',
		title: '15 Fun Trivia Challenge, Answer Now!',
		description:
			"Are you ready for a fun and challenging trivia quiz? Test your knowledge with these 15 questions covering a variety of topics. From animal strength to geography, pop culture, and more, see how many answers you can get right. Don't worry, we won't judge you if you don't know them all!",
		questions: [
			{
				title: 'Sample Question One : Short Question',
				description: 'Sample Question One Description, it is Optional',
				type: 'short',
				options: [],
			},
			{
				title: 'Sample Question Two : Long Question',
				description: 'Sample Question Two Description, it is also Optional',
				type: 'long',
				options: [],
			},
			{
				title: 'Sample Question Three : MCQ Question',
				description: 'Sample Question Three Description, it is Optional',
				type: 'mcq',
				options: [
					{
						title: 'Choice One Title',
						name: 'one',
					},
					{
						title: 'Choice Two Title',
						name: 'two',
					},
				],
			},
			{
				title: 'Sample Question Four : True/False Question',
				description: 'Sample Question Four Description, it is also Optional',
				type: 'trfl',
				options: [
					{
						title: 'Option Title (True)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
				],
			},
		],
	},
	{
		_id: '213e4567-e89b-12d3-a456-000042665234',
		image: sample,
		title: 'Can you guess the sequence..?',
		title1: "Are you smarter than world's smartest ape?",
		description:
			"To say that Kanzi, a Bonobo ape that resides at The Great Ape Sanctuary outside Des Moines, Iowa, is smarter than a human bady toddler, may be understating this matter. It's because of the",
		questions: [
			{
				title: 'Sample Question One : Short Question',
				description: 'Sample Question One Description, it is Optional',
				type: 'short',
				options: [],
			},
			{
				title: 'Sample Question Two : Long Question',
				description: 'Sample Question Two Description, it is also Optional',
				type: 'long',
				options: [],
			},
			{
				title: 'Sample Question Three : MCQ Question',
				description: 'Sample Question Three Description, it is Optional',
				type: 'mcq',
				options: [
					{
						title: 'Choice One Title',
						name: 'one',
					},
					{
						title: 'Choice Two Title',
						name: 'two',
					},
				],
			},
			{
				title: 'Sample Question Four : True/False Question',
				description: 'Sample Question Four Description, it is also Optional',
				type: 'trfl',
				options: [
					{
						title: 'Option Title (True)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
				],
			},
		],
	},
]

export default FETCHED_QUESTIONS
