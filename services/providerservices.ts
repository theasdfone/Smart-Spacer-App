import { HealthcareProvider } from "@/components/models/provider";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItem("secure_token");

export const providerServices = {
    async getProviders() {
        const result = await fetchData('rt', {
            method: 'GET',
        }, token);

        return result;
    },

    async getProviderById(id: String) {
        const result = await fetchData(`rt/${id}`, {
            method: 'GET',
        }, token);

        return result;
    },

    async createProvider(entry: HealthcareProvider) {
        const result = await fetchData('rt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async updateProvider(id: number, entry: HealthcareProvider) {
        const result = await fetchData(`rt/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async deleteProvider(id: number) {
        const result = await fetchData(`rt/${id}`, {
            method: 'DELETE',
        }, token);
        return result;
    }
}