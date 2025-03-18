import { Resource } from "@/components/ResourceComponents/objects/resource";
import ResourceContainer from "@/components/ResourceComponents/resourcecontainer";
import ResourceHeader from "@/components/ResourceComponents/resourceheader";
import { resourceServices } from "@/services/resourceservices";
import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

export default function resourceScreen() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResourcesData = async () => {
      try {
        const result = await resourceServices.getResources();
        setResources(result);
      } catch (err) {
        console.log(err)
      }
    };

    fetchResourcesData();
  }, []);

  return (
    <View style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.components}>
          <ResourceHeader
            resultSize={resources.length}
          />
        </View>
        <View style={style.components}>
          <ResourceContainer
            resources={resources}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  components: {
    marginTop: 20
  },
});