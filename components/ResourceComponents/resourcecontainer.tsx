import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, Button, Linking } from "react-native";
import { Resource } from './objects/resource';
import { placeholder } from '@/placeholder/placeholder';
import { Link } from 'expo-router';

type Props = {
    resources: Resource[]
}

export default function ResourceContainer({resources}: Props) {
 return (
      <View style={style.container}>
        {
            resources.map((resource) => {
                return(
                    <View key={resource.ResourceId} style={style.resourceContainer}>
                        <Link
                            href={resource.Link}
                        >
                            <View>
                                <Image 
                                    style={style.resourceImg}
                                    source={require('../../assets/images/resource-pic1.png')}
                                />
                                <View style={style.title}>
                                    <Text>{resource.Title}</Text>
                                    <Text>{resource.Description}</Text>
                                </View>
                            </View>
                        </Link>
                    </View>
                )
            })
        }
      </View>
  );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    resourceContainer: {
        width: 175,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    resourceImg: {
        height: 175,
        width: 175,
        borderRadius: 5
    },

    title: {
        paddingTop: 10
    }
});