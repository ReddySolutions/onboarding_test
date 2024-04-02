import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:8000/api/v1/"
})

/* Get a list of users */
export async function displayLeaderBoard() {
	try {
		const result = await api.get("leader-board/")
		return result.data
	} catch (error) {
		throw new Error("Error fetching leader board")
	}
}

/* Get training modules for a specific user */
export async function getTrainingModulesByUserId(userId) {
	try {
		const result = await api.get(`training-modules/${userId}`)
		return result.data
	} catch (error) {
		throw new Error("Error fetching training module")
	}
}
