import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, SignInResponse, statusCodes } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
    const storeLogin = async (value: SignInResponse) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            throw console.error(e);

        }
    };

    const signIn = async () => {
        try {
            GoogleSignin.configure({});
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            storeLogin(userInfo);

            return userInfo;
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                throw console.error("Signin cancelled");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                throw console.error("Operation in progress");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                throw console.error("Services not available");
            } else {
                // some other error happened
                throw console.error(error);
            }
        }
    };

    const login = async () => {
        const response = await signIn().then(() => {
            router.replace("/(tabs)")
        }).catch((err) => {
            throw console.error(err)
        });

        // const { idToken, user } = response;

        // if (idToken) {
        //     const resp = await authAPI.validateToken({
        //         token: idToken,
        //         email: user.email,
        //     });
        //     await handlePostLoginData(resp.data);
        // }
    }

    return (
        <View style={style.main}>
            <View style={style.container}>
                <View style={style.mainContainer}>
                    <View>
                        <TouchableOpacity
                            style={style.continueButton}
                            onPress={login}
                        >
                            <View style={style.textContainer}>
                                <Text style={style.buttonText}>Login</Text>
                                <Image style={style.addIcon} source={require('@/assets/images/add-icon.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    container: {
        width: "50%",
    },

    mainContainer: {
        backgroundColor: "#E9E9E9",
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    continueButton: {
        backgroundColor: "#119DA4",
        height: 35,
        width: 135,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    addIcon: {
        height: 25,
        width: 25,
        borderRadius: 40,
    },

    buttonText: {
        color: "#F4F4F4",
        fontSize: 16,
        fontWeight: "bold"
    },
});
