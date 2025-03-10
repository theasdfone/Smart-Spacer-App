import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GameScreen from './GameScreen';

type Props = {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<any>>; 
}

export default function GameHeader({modalVisible, setModalVisible} : Props){
    const [running, setRunning] = useState(false);
    const [gameEngine, setGameEngine] = useState(null);
    const [currentPoints, setCurrentPoints] = useState(0);
    

    useEffect(() => {
      setRunning(false)
    }, []);

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.dropdownBackground}>
                <Image 
                  style={styles.dropdown}
                  source={require('../../assets/images/x-delete.png')}
                />
              </View>
            </TouchableOpacity>
            <GameScreen />
            </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#E9E9E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },

  dropdownBackground: {
    height: 15,
    width: 15,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  dropdown: {
    height: 10,
    width: 10
  },
});