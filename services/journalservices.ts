import { Journal } from "@/components/models/journal";
import { fetchData } from "./util/api"

export const journalServices = {
    async getJournals() {
        const result = await fetchData('journal', {
            method: 'GET',
        });

        return result;
    },

    async getJournalsByUserId(childId: String) {
        const result = await fetchData(`journal/${childId}`, {
            method: 'GET',
        });

        return result;
    },

    async createJournal(entry: Journal) {
        const result = await fetchData('journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        });
        return result;
    },

    async updateJournal(id: number, entry: Journal) {
        const result = await fetchData(`journal/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        });
        return result;
    },

    async deleteJournal(id: number) {
        const result = await fetchData(`journal/${id}`, {
            method: 'DELETE',
        });
        return result;
    }
}