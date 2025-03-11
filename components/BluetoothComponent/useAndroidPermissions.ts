import { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';

type THook = [boolean, boolean];

interface PermissionsAndroidResponse {
  [key: string]: string;
}

const PERMISSIONS_REQUEST = [
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
  PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN
];

const isAllGranted = (res: PermissionsAndroidResponse) => {
  return PERMISSIONS_REQUEST.every((permission) => {
    console.log(res[permission] === PermissionsAndroid.RESULTS.GRANTED)
    return res[permission] === PermissionsAndroid.RESULTS.GRANTED;
  });
}

export const useAndroidPermissions = (): THook => {
  const [granted, setGranted] = useState(false);
  const [waiting, setWaiting] = useState(true);

  const doRequest = async () => {
    let granted = false;
    try {
      const res = await PermissionsAndroid.requestMultiple(PERMISSIONS_REQUEST);
      granted = isAllGranted(res);
    } catch (err) {
      console.warn(err);
    }

    setWaiting(false);
    setGranted(granted);
  }

  useEffect(() => {
    doRequest();
  }, []);

  return [waiting, granted];
};