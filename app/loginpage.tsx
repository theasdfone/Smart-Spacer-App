import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as SecureStore from 'expo-secure-store';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { childServices } from "@/services/childservices";

export default function LoginPage() {
    const signIn = async () => {
        try {
            GoogleSignin.configure({
                webClientId: "70846818855-uvvgafo1soc8r07ohu81q73kiu5muu09.apps.googleusercontent.com",
            });
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            if (userInfo.data?.idToken) {
                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(userInfo.data.idToken);

                // Sign-in the user with the credential
                const authUser = await auth().signInWithCredential(googleCredential);

                await authUser.user.getIdToken().then((token) => {
                    router.replace("/(tabs)");
                    SecureStore.setItem("secure_token", token);
                }).catch((err) => {
                    console.error(err)
                });

                var child = await childServices.getChildById("test");
                SecureStore.setItem("child", JSON.stringify(child[0]));
            }

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

    return (
        <View style={style.main}>
            <View style={style.container}>
                <View style={style.mainContainer}>
                    <View>
                        <TouchableOpacity
                            style={style.continueButton}
                            onPress={signIn}
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
