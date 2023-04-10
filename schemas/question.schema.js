import z from 'zod'

export const createQuestionFormSchema = z.object({
	image: z.string().url(),
	title: z.string().min(1, { message: 'Title is required' }).max(100, 'Max length is 100'),
	description: z.string().max(500, 'Max length is 500').optional(),
	questions: z.array(questionSchema),
	config: z.object(),
})

export const questionSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }).max(100, 'Max length is 100'),
	description: z.string().max(500, 'Max length is 500').optional(),
	type: z.enum(['short', 'long', 'mcq', 'trfl']),
	options: z.array(optionSchema),
})

export const optionSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }).max(100, 'Max length is 100'),
	name: z.string().min(1, { message: 'Name is required' }).max(5),
})
