import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import TaskList from "./components/TaskList";
import { images, MAX_EXP, BUTTON_COLORS } from "./constants";
import ProgressBar from "./components/ProgressBar";
import ColorButtons from "./components/ColorButtons";
import InteractiveImage from "./components/InteractiveImage";
import ToggleButton from "./components/ToggleButton";
import SplashScreenModal from "./components/SplashScreenModal";
import YellowButtonModal from "./components/YellowButtonModal";
import PinModal from "./components/PinModal";
import FullScreenImageModal from "./components/FullScreenImageModal";
import QuestsModal from "./components/QuestsModal";

import {
  addExp,
  toggleTask,
  cycleImage,
  handleImagePress,
  changeButtonColor,
} from "./utils";
import { styles } from "./stylesGame";

const GameScreen = () => {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const [showQuests, setShowQuests] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalColor, setModalColor] = useState("#aaa");
  const [colorIndex, setColorIndex] = useState(0);
  const [image, setImage] = useState(images.original);
  const [imageSize, setImageSize] = useState({ width: 100, height: 200 });
  const [timeoutId, setTimeoutId] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [showYellowModal, setShowYellowModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showRedModal, setShowRedModal] = useState(false);
  const [showGreenModal, setShowGreenModal] = useState(false);
  const [mainImage, setMainImage] = useState(images.original);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showQuestsModal, setShowQuestsModal] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Defeat 10 enemies", completed: false, reward: 5 },
    { id: 2, text: "Collect 5 potions", completed: false, reward: 3 },
    { id: 3, text: "Find the hidden treasure", completed: false, reward: 7 },
  ]);

  const redPictures = [
    require("./carousel/image1.png"), // Replace with your image paths
    require("./carousel/image2.png"),
    require("./carousel/image3.png"),
  ];

  const greenPictures = [
    require("./carousel/image1.png"), // Replace with your image paths
    require("./carousel/image2.png"),
    require("./carousel/image3.png"),
  ];

  const buttonImages = [
    { name: "green", src: require("./buttons/Clothes.png") },
    { name: "red", src: require("./buttons/Food.png") },
    { name: "yellow", src: require("./buttons/Journal.png") },
  ];

  const redBackgroundImage = require("./backgrounds/FoodBkg.png");
  const greenBackgroundImage = require("./backgrounds/ClosetBkg.png");
  const mainBackgroundImage = require("./backgrounds/HomeBkg.png");

  const handlePress = () => addExp(exp, setExp, level, setLevel, 1, MAX_EXP);

  const handleTaskToggle = (id) => toggleTask(tasks, setTasks, id, handlePress);

  const handleCycleImage = (position) =>
    cycleImage(setImage, images, timeoutId, setTimeoutId, position);

  const handleImageTap = (evt) =>
    handleImagePress(
      evt,
      imageSize,
      handleCycleImage,
      images,
      timeoutId,
      setTimeoutId
    );

  const handleChangeButtonColor = () =>
    changeButtonColor(colorIndex, setColorIndex, BUTTON_COLORS);

  const handleOpenModal = (type, color = null) => {
    if (type === "red") {
      setBackgroundImage(redBackgroundImage); // Set the red background image
      setShowRedModal(true); // Show the red modal
    } else if (type === "green") {
      setBackgroundImage(greenBackgroundImage); // Set the green background image
      setShowGreenModal(true); // Show the green modal
    } else if (type === "yellow") {
      setShowYellowModal(true); // Show the yellow modal
    } else if (type === "quests") {
      setShowQuestsModal(true); // Show the quests modal
    } else {
      setModalColor(color);
      setModalVisible(true); // Show the regular modal for other colors
    }
  };

  const handleYesButtonPress = () => {
    setShowYellowModal(false); // Close the yellow modal
    setShowPinModal(true); // Open the PIN modal
  };

  const handleSelectPicture = (picture) => {
    setMainImage(picture); // Update the main image
  };

  return (
    <View>
        <Image source={mainBackgroundImage} style={styles.backgroundImage} resizeMode="contain" />
        <View style={styles.ui}>
          <View>
            <Text style={styles.levelText}>Level: {level}</Text>
            <Text style={styles.expText}>
              EXP: {exp} / {MAX_EXP}
            </Text>

            <ProgressBar
              progress={(exp / MAX_EXP) * 100}
              height={15}
              borderRadius={5}
              backgroundColor="#333"
              fillColor="#00ff00"
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Gain EXP</Text>
            </TouchableOpacity>

            <ToggleButton
              showQuests={showQuests}
              onPress={() => handleOpenModal("quests")}
            />

            {showQuests && (
              <TaskList tasks={tasks} toggleTask={handleTaskToggle} />
            )}
          </View>
          <View style={styles.bunny}>
            <InteractiveImage
              image={image}
              imageSize={imageSize}
              onPressIn={handleImageTap}
            />
          </View>
          <View style={styles.container}>
            <QuestsModal
              visible={showQuestsModal}
              onClose={() => setShowQuestsModal(false)}
              tasks={tasks}
              toggleTask={toggleTask}
              handleOpenModal={handleOpenModal}
            />
            <SplashScreenModal
              visible={showSplash}
              onClose={() => setShowSplash(false)}
            />
            <YellowButtonModal
              visible={showYellowModal}
              onClose={() => setShowYellowModal(false)}
              onYes={handleYesButtonPress}
            />
            <PinModal
              visible={showPinModal}
              onClose={() => setShowPinModal(false)}
            />
            {/* Red Full-Screen Modal */}
            <FullScreenImageModal
              visible={showRedModal}
              onClose={() => setShowRedModal(false)}
              backgroundImage={backgroundImage}
              color={modalColor}
              image={image}
              carouselImages={redPictures}
            />

            {/* Green Full-Screen Modal */}
            <FullScreenImageModal
              visible={showGreenModal}
              onClose={() => setShowGreenModal(false)}
              backgroundImage={backgroundImage}
              color={modalColor}
              image={image}
              carouselImages={greenPictures}
            />

            <ColorButtons
              images={buttonImages}
              onPress={(color) => handleOpenModal(color)}
            />
          </View>
        </View>
      </View>
  );
};

export default GameScreen;
