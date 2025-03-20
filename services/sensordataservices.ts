import { SpacerUse } from "@/components/models/spaceruse";
import { fetchData } from "./util/api"

import * as SecureStore from 'expo-secure-store';
import { SensorDetail } from "@/components/models/sensordetail";

const token = SecureStore.getItem("secure_token");

export const sensorDetailServices = {
    async getSensorDetailByDate(child_id: string, start: string, end: string) {
        const result = await fetchData(`sensor_details/${child_id}?start=${start}&end=${end}`, {
            method: 'GET',
        }, token);
        console.log(result);
        return result;
    },

    async getSensorDetailByChildId(child_id: string) {
        const result = await fetchData(`sensor_details/${child_id}`, {
            method: 'GET',
        }, token);

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
        }, token);
        return result;
    },

    async updateSensorDetail(id: number, entry: SensorDetail) {
        const result = await fetchData(`sensor_details/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        }, token);
        return result;
    },

    async deleteSensorDetail(id: number) {
        const result = await fetchData(`sensor_details/${id}`, {
            method: 'DELETE',
        }, token);
        return result;
    }
}