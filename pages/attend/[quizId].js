import { useRouter } from 'next/router'

const AttendQuiz = () => {
	const { query } = useRouter()
	const quizId = query.quizId

	return <div>AttendQuiz : {quizId}</div>
}

export default AttendQuiz
