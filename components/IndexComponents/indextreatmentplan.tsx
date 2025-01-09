import { useState } from "react";
import { Text, View, StyleSheet, Modal, Image, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from 'react-native-progress/Bar';

import { Inhaler } from './objects/inhaler';
import { placeholder } from "@/placeholder/placeholder";

export default function IndexTreatment() {
  const [inhalers, setInhalers] = useState<Inhaler[]>(placeholder.inhaler);
  const [modalVisible, setModalVisible] = useState(false);

 return (
      <View>
        <View style={style.main}>
          <View style= {style.treatmentplan}>
            <View style={style.iconBackground}>
              <Image
                style={style.medIcon}
                source={require('../../assets/images/hospital-icon.png')}
              />
            </View>
            <Text style={style.title}>Your Treatment Plan</Text>
          </View>
          <View>
            {
              inhalers.slice(0,2).map((inhaler) => {
                return(
                  <View key={inhaler.InhalerId} style={style.inhalerContainer}>
                    <Image 
                      style={style.inhalerIcon}
                      source={require('../../assets/images/asthma-inhaler.png')}
                    />
                    <View style={style.inhalerDescriptions}>
                      <Text style={style.inhalerText}>{inhaler.Title}</Text>
                      <ProgressBar progress={inhaler.AmountLeft} width={220} height={4} color='gray' borderWidth={2} />
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View style={style.editContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={style.editButton}
            >
              <Image 
                style={style.editIcon}
                source={require('../../assets/images/edit.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaProvider>
          <SafeAreaView style={style.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={style.centeredView}>
                <View style={style.modalView}>
                  <Text>ABC</Text>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
  );
}

const style = StyleSheet.create({
  main: {
    backgroundColor: "#E1E1E1",
    height: 200,
    paddingTop: 10,
    borderRadius: 10,
  },

  treatmentplan: {
    flexDirection: "row",
    alignItems: "center"
  },

  inhalerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10
  },

  inhalerDescriptions: {
    paddingLeft: 10,
    paddingTop: 5
  },

  inhalerText: {
    paddingBottom: 3
  },
  
  medIcon: {
    height: 30,
    width: 30,
    borderRadius: 40,
  },

  inhalerIcon: {
    height: 35,
    width: 35,
    marginLeft: 15,
    marginTop: 10,
  },

  iconBackground: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 20
  },

  editContainer: {
    alignItems:"flex-end",
    paddingRight: 10
  },

  editButton: {
    backgroundColor: "darkgrey",
    height: 35,
    width: 35,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  editIcon: {
    height: 20,
    width: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    height: "50%",
    width: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});