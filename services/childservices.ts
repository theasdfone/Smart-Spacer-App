import { Child } from "@/components/models/child";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItemAsync("secure_token");

export const childServices = {
    async getChilds() {
        const result = await fetchData('child', {
            method: 'GET',
        }, await token);

        return result;
    },

    async getChildsByUserId(parentId: String) {
        const result = await fetchData(`child/${parentId}`, {
            method: 'GET',
        }, await token);

        return result;
    },

    async getChildById(childId: String) {
        const result = await fetchData(`child/${childId}/specific`, {
            method: 'GET',
        }, await token);

        return result;
    },

    async createChild(entry: Child) {
        const result = await fetchData('child', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, await token);
        return result;
    },

    async updateChild(id: number, entry: Child) {
        const result = await fetchData(`child/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, await token);
        return result;
    },

    async deleteChild(id: number) {
        const result = await fetchData(`child/${id}`, {
            method: 'DELETE',
        }, await token);
        return result;
    }
}