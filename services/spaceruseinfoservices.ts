import { SpacerUse } from "@/components/models/spaceruse";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';

const token = SecureStore.getItem("secure_token");

export const spacerUseInfoServices = {
    async getSpacerUseInfos() {
        const result = await fetchData('spacer_use_info', {
            method: 'GET',
        }, token);

        return result;
    },

    async getSpacerUseInfoByChildId(child_id: string) {
        const result = await fetchData(`spacer_use_info/${child_id}`, {
            method: 'GET',
        }, token);

        return result;
    },

    async createSpacerUseInfo(entry: SpacerUse) {
        const result = await fetchData('spacer_use_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async updateSpacerUseInfo(id: number, entry: SpacerUse) {
        const result = await fetchData(`spacer_use_info/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async deleteSpacerUseInfo(id: number) {
        const result = await fetchData(`spacer_use_info/${id}`, {
            method: 'DELETE',
        }, token);
        return result;
    }
}