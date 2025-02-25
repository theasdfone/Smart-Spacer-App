import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import entities from './entities';
import Physics from './physics';

export default function GameHeader(){
    const [running, setRunning] = useState(false);
    const [gameEngine, setGameEngine] = useState(null);
    const [currentPoints, setCurrentPoints] = useState(0);

    useEffect(() => {
      setRunning(false)
    }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require("../src/assets/images/background.png")} style={styles.background} />

      {/* Level Bar */}
      <View style={styles.levelBar}>
        <Image source={require("../src/assets/images/level_bar.png")} style={styles.levelBarImage} />
        <Text style={styles.levelText}>Lvl 1</Text>
      </View>

      {/* Game Engine with Bunny */}
      <GameEngine
        ref={(ref) => setGameEngine(ref)}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case "game_over":
              setRunning(false);
              gameEngine.stop();
              break;
            case "new_point":
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={styles.gameArea}
      />

      {/* Bottom Buttons (Dress, Actions, Food) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image source={require("../src/assets/images/clothes_button.png")} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../src/assets/images/journal_button.png")} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../src/assets/images/food_button.png")} style={styles.button} />
        </TouchableOpacity>
      </View>

      {/* Start Game Button */}
      {!running && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            setCurrentPoints(0);
            setRunning(true);
            gameEngine.swap(entities());
          }}
        >
          <Text style={styles.startButtonText}>START GAME</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  levelBar: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  levelBarImage: {
    width: 100,
    height: 30,
  },
  levelText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    left: 10,
  },
  gameArea: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    width: 60,
    height: 60,
  },
  startButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: 80,
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  startButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
});