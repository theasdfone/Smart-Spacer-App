import { Journal } from "@/components/models/journal";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItem("secure_token");

export const journalServices = {
    async getJournals() {
        const result = await fetchData('journal', {
            method: 'GET',
        }, token);

        return result;
    },

    async getJournalsByChildId(childId: string) {
        const result = await fetchData(`journal/${childId}`, {
            method: 'GET',
        }, token);

        return result;
    },

    async getJournalsByChildIdAndDate(childId: string, selectedDate: string) {
        const result = await fetchData(`journal/${childId}?date=${selectedDate}`, {
            method: 'GET',
        }, token);

        return result;
    },

    async createJournal(entry: Journal) {
        const result = await fetchData('journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async updateJournal(id: number, entry: Journal) {
        const result = await fetchData(`journal/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async deleteJournal(id: number) {
        const result = await fetchData(`journal/${id}`, {
            method: 'DELETE',
        }, token);
        return result;
    }
}