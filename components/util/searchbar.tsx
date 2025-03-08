import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  searchPhrase: string;
  setSearchPhrase:  React.Dispatch<React.SetStateAction<any>>;
};

export default function Searchbar({searchPhrase, setSearchPhrase} : Props) {
    return (
        <View style={styles.container}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
          />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20
  },
  
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "95%",
  },
});
