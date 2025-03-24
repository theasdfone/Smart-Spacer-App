import { SpacerUse } from "@/components/models/spaceruse";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';
import { SensorDetail } from "@/components/models/sensordetail";

const token = SecureStore.getItemAsync("secure_token");

export const sensorDetailServices = {
    async getSensorDetailByDate(spacer_id: number, start: string, end: string, type: number) {
        console.log(token)
        const result = await fetchData(`sensor_details/${spacer_id}?start=${start}&end=${end}&type=${type}`, {
            method: 'GET',
        }, await token);

        return result;
    },

    async getSensorDetailByChildId(spacer_id: number) {
        const result = await fetchData(`sensor_details/${spacer_id}`, {
            method: 'GET',
        }, await token);

        return result;
    },

    async createSensorDetail(entrys: SensorDetail[]) {
        console.log(entrys);
        const result = await fetchData('sensor_details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entrys),
        }, await token);
        return result;
    },

    async updateSensorDetail(id: number, entry: SensorDetail) {
        const result = await fetchData(`sensor_details/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, await token);
        return result;
    },

    async deleteSensorDetail(id: number) {
        const result = await fetchData(`sensor_details/${id}`, {
            method: 'DELETE',
        }, await token);
        return result;
    }
}