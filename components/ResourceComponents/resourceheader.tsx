import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, Image } from "react-native";

import Profile from '../util/profilepicture';
import Searchbar from '../util/searchbar';

type Props = {
  resultSize: number
}

export default function ResourceHeader({ resultSize }: Props) {
  const [search, setSearch] = useState("");

  return (
    <View>
      <View style={style.shadows}>
        <View style={style.container}>
          <View style={style.navbar}>
            <View style={style.welcome}>
              <View style={style.imgheader}>
                <Text style={style.header}>Resources</Text>
                <Profile />
              </View>
              <View style={style.searchbar}>
                <Searchbar
                  searchPhrase={search}
                  setSearchPhrase={setSearch}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.results}>
        <Text>Results {resultSize}</Text>
        <TouchableOpacity
          style={style.button}
        >
          <Text style={style.buttonText}>Filter</Text>
          <View style={style.dropdownBackground}>
            <Image
              style={style.dropdown}
              source={require('@/assets/images/filter.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  shadows: {
    overflow: "hidden",
    paddingBottom: 5,
  },

  container: {
    backgroundColor: '#fff',
    elevation: 5,
  },

  navbar: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 125
  },

  welcome: {
    flex: 1,
  },

  imgheader: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: "center"
  },

  profile: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  header: {
    fontSize: 40,
    width: "85%"
  },

  searchbar: {
    marginTop: 10
  },

  results: {
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%"
  },

  button: {
    height: 32,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#E1E1E1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    paddingRight: 5,
    fontWeight: "bold"
  },

  dropdown: {
    height: 10,
    width: 10
  },

  dropdownBackground: {
    height: 15,
    width: 15,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});