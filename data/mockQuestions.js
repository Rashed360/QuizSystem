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
		title: '10 Fun Trivia Challenge, Answer Now!',
		description:
			"Are you ready for a fun and challenging trivia quiz? Test your knowledge with these 10 questions covering a variety of topics. From animal strength to geography, pop culture, and more, see how many answers you can get right. Don't worry, we won't judge you if you don't know them all!",
		questions: [
			{
				title: 'How many dots appear on a pair of dice?',
				type: 'trfl',
				options: [
					{
						title: '21',
						name: 'one',
					},
					{
						title: '30',
						name: 'one',
					},
					{
						title: '42',
						name: 'one',
					},
					{
						title: '50',
						name: 'one',
					},
				],
			},
			{
				title: 'What phone company produced the 3310?',
				description: 'Note: 3310 is a popular mobile phone model released in the late 2000.',
				type: 'short',
				options: [],
			},
			{
				title: 'What animal below is the strongest?',
				description: 'Compared to their body weight-to-size ratio!',
				type: 'trfl',
				options: [
					{
						title: 'Elephant',
						name: 'two',
					},
					{
						title: 'Dung Beetle',
						name: 'two',
					},
					{
						title: 'Ant',
						name: 'two',
					},
					{
						title: 'Cow',
						name: 'two',
					},
				],
			},
			{
				title: 'What is a group of crows called?',
				description: 'The answer is quite unusual! (Answer in 2 words including an article)',
				type: 'short',
				options: [],
			},
			{
				title: 'Which human body part is fully grown from birth?',
				description: 'There is only one body part in humans thats fully grown from birth.',
				type: 'short',
				options: [],
			},
			{
				title: 'The fear of flying is known as..',
				description: 'Sample Question Four Description, it is also Optional',
				type: 'trfl',
				options: [
					{
						title: 'Thanatophobia',
						name: 'three',
					},
					{
						title: 'Acrophobia',
						name: 'three',
					},
					{
						title: 'Hippopotomonstrosesquippedaliophobia',
						name: 'three',
					},
				],
			},
			{
				title: 'In Australia what is commonly known as a Bottle-o?',
				description: 'Mate, lets get a slab of beer from the bottle-o! 😂 (More than one answer)',
				type: 'mcq',
				options: [
					{
						title: 'An off-license',
						name: 'four',
					},
					{
						title: 'A Big Jug',
						name: 'four',
					},
					{
						title: 'Liquor Store',
						name: 'four',
					},
				],
			},
			{
				title: 'Where is the strongest human muscle located?',
				description:
					'The strongest muscle based on its weight is the masseter. It has a force as great as 25 kilograms on the incisors or 90.7 kilograms on the molars. (Single word)',
				type: 'short',
				options: [],
			},
			{
				title: 'What planet is closest to the sun? ',
				type: 'trfl',
				options: [
					{
						title: 'Venus',
						name: 'five',
					},
					{
						title: 'Mercury',
						name: 'five',
					},
					{
						title: 'Pluto',
						name: 'five',
					},
				],
			},
			{
				title: 'How many hearts does an octopus have?',
				description:
					'The strongest muscle based on its weight is the masseter. It has a force as great as 25 kilograms on the incisors or 90.7 kilograms on the molars. (Single word)',
				type: 'trfl',
				options: [
					{
						title: '13',
						name: 'six',
					},
					{
						title: '4',
						name: 'six',
					},
					{
						title: '3',
						name: 'six',
					},
				],
			},
			{
				title: "11th Question? Your aren't seeing wrong!",
				description:
					'Give us feedback. Tell us what you think about this quiz and if you would like more quizes like this? (Optional)',
				type: 'long',
				options: [],
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
