import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Modal, Image, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from 'react-native-progress/Bar';

import * as SecureStore from 'expo-secure-store';
import { spacerServices } from "@/services/spacerservices";
import { SpacerMedication } from "../models/spacermedications";

export default function IndexTreatment() {
  const [spacerMedications, setSpacerMedications] = useState<SpacerMedication[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const child = SecureStore.getItem("child");
    const fetchSpacersData = async (child_id: string) => {
      try {
        const result = await spacerServices.getSpacerMedicationByChildId(child_id);
        setSpacerMedications(result);
      } catch (err) {
        console.log(err)
      }
    };

    if (child) {
      fetchSpacersData(JSON.parse(child).id);
    } else {
      throw console.error("Child not found");
    }
  }, []);

  return (
    <View>
      <View style={style.main}>
        <View style={style.treatmentplan}>
          <View style={style.iconBackground}>
            <Image
              style={style.medIcon}
              source={require('../../assets/images/hospital-icon.png')}
            />
          </View>
          <Text style={style.title}>Your Treatment Plan</Text>
        </View>
        <View style={style.spacerContainer}>
          {
            spacerMedications ?
              spacerMedications.slice(0, 2).map((spacerMedication) => {
                console.log(spacerMedication)
                return (
                  <View style={style.inhalerContainer}>
                    <Image
                      style={style.inhalerIcon}
                      source={require('../../assets/images/asthma-inhaler.png')}
                    />
                    <View style={style.inhalerDescriptions}>
                      <Text style={style.inhalerText}>{spacerMedication.commercial_name}</Text>
                      <ProgressBar progress={spacerMedication.doses_left/100} width={220} height={4} color={spacerMedication.colour} borderWidth={2} />
                    </View>
                  </View>
                )
              })
              :
              <View style={style.emptyTextContainer}>
                <Text style={style.emptyText}>No Data</Text>
              </View>
          }
          <View style={style.editContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
            >
              <Text style={style.editButton}>See Full Report</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#E9E9E9",
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  treatmentplan: {
    flexDirection: "row",
    alignItems: "center"
  },

  spacerContainer: {
    height: 150,
  },

  emptyTextContainer: {
    alignItems: "center",
    marginTop: 30
  },

  emptyText: {
    fontSize: 50
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
    paddingRight: 20,
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
    alignItems: "flex-end",
    paddingRight: 10,
    paddingTop: 20
  },

  editButton: {
    textDecorationLine: "underline"
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