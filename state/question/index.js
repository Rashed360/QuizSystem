import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	image: '',
	title: 'Quiz Title',
	description: 'Quiz Description',
	questions: [
		{
			type: 'short',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [],
		},
		{
			type: 'long',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [],
		},
		{
			type: 'mcq',
			title: 'Question Title',
			description: 'Question Description (Optional)',
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
			type: 'trfl',
			title: 'Question Title',
			description: 'Question Description (Optional)',
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
		{
			type: 'drop',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					title: 'Option One Title',
					name: 'trfl',
				},
				{
					title: 'Option Two Title',
					name: 'trfl',
				},
				{
					title: 'Option Three Title',
					name: 'trfl',
				},
			],
		},
		{
			type: 'file',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					maxFiles: 2,
					maxSize: 100,
				},
			],
		},
		{
			type: 'doc',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					maxFiles: 2,
					maxSize: 100,
				},
			],
		},
		{
			type: 'img',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					maxFiles: 2,
					maxSize: 100,
				},
			],
		},
		{
			type: 'linear',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					start: 0,
					end: 10,
					lowest: 'Worst',
					highest: 'Excelent',
				},
			],
		},
		{
			type: 'range',
			title: 'Question Title',
			description: 'Question Description (Optional)',
			options: [
				{
					start: 0,
					end: 100,
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
