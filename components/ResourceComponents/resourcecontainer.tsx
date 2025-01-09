import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, Button, Linking } from "react-native";
import { Resource } from './objects/resource';
import { placeholder } from '@/placeholder/placeholder';
import { Link } from 'expo-router';

export default function ResourceContainer() {
    const [resources, setResources] = useState<Resource[]>(placeholder.resources);

 return (
      <View>
        {
            resources.map((resource) => {
                return(
                    <View>
                        <Link
                            href={resource.Link}
                        >
                            <Image 
                                style={style.resourceImg}
                                source={require('../../assets/images/resource-pic1.png')}
                            />
                            <Text>{resource.Title}</Text>
                            <Text>{resource.Description}</Text>
                        </Link>
                    </View>
                )
            })
        }
      </View>
  );
}

const style = StyleSheet.create({
    resourceImg: {
        height: 50,
        width: 50
    }
});