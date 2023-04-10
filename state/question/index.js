import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	image: '',
	title: 'Quiz Title',
	description: 'Quiz Description',
	questions: [
		{
			title: 'Question Title',
			description: 'Question Description (Optional)',
			type: 'short',
			options: [],
		},
		{
			title: 'Question Title',
			description: 'Question Description (Optional)',
			type: 'long',
			options: [],
		},
		{
			title: 'Question Title',
			description: 'Question Description (Optional)',
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
			title: 'Question Title',
			description: 'Question Description (Optional)',
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
	config: {},
}

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		addQuestion: state => {
			state.questions.push({
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'short',
				options: [],
			})
		},
		deleteQuestion: (state, action) => {
			state.questions.splice(action.payload, 1)
		},
		changeQuestionType: (state, action) => {
			state.questions[action.payload.id].type = action.payload.type
			state.questions[action.payload.id].options = []
		},
	},
})

export const { addQuestion, deleteQuestion, changeQuestionType } = questionSlice.actions
export default questionSlice.reducer
