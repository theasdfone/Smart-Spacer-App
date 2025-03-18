import { Text, View, StyleSheet, Image } from "react-native";
import { Resource } from './objects/resource';
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
                    <View key={resource.id} style={style.resourceContainer}>
                        <Link
                            href={resource.url}
                        >
                            <View>
                                <Image 
                                    style={style.resourceImg}
                                    source={require('../../assets/images/resource-pic1.png')}
                                />
                                <View style={style.title}>
                                    <Text>{resource.title}</Text>
                                    <Text>{resource.description}</Text>
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