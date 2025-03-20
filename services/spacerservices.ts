import { Spacer } from "@/components/models/spacer";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItemAsync("secure_token");

export const spacerServices = {
    async getSpacers() {
        const result = await fetchData('spacer', {
            method: 'GET',
        }, await token);

        return result;
    },

    async getSpacersByChildId(child_id: String) {
        const result = await fetchData(`spacer/${child_id}`, {
            method: 'GET',
        }, await token);

        return result;
    },

    async getSpacerMedicationByChildId(child_id: String) {
        const result = await fetchData(`spacer/medication/${child_id}`, {
            method: 'GET',
        }, await token);

        return result;
    },


    async createSpacer(entry: Spacer) {
        const result = await fetchData('spacer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, await token);
        return result;
    },

    async updateSpacer(id: number, entry: Spacer) {
        const result = await fetchData(`spacer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, await token);
        return result;
    },

    async deleteSpacer(id: number) {
        const result = await fetchData(`spacer/${id}`, {
            method: 'DELETE',
        }, await token);
        return result;
    }
}