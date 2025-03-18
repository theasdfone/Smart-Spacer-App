import { Resource } from "@/components/ResourceComponents/objects/resource";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItem("secure_token");

export const resourceServices = {
    async getResources() {
        const result = await fetchData('resources', {
            method: 'GET',
        }, token);

        return result;
    },

    async getResourceById(id: number) {
        const result = await fetchData(`resources/${id}`, {
            method: 'GET',
        }, token);

        return result;
    },

    async createResource(entry: Resource) {
        const result = await fetchData('resources', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async updateResource(id: number, entry: Resource) {
        const result = await fetchData(`resources/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async deleteResource(id: number) {
        const result = await fetchData(`resources/${id}`, {
            method: 'DELETE',
        }, token);
        return result;
    }
}