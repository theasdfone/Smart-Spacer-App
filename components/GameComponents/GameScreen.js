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
import { images, carouselImages, MAX_EXP, BUTTON_COLORS } from "./constants";
import ProgressBar from "./components/ProgressBar";
import ModalView from "./components/ModalView";
import ColorButtons from "./components/ColorButtons";
import InteractiveImage from "./components/InteractiveImage";
import ToggleButton from "./components/ToggleButton";
import SplashScreenModal from "./components/SplashScreenModal";
import YellowButtonModal from "./components/YellowButtonModal";
import PinModal from "./components/PinModal";
import PictureGridModal from "./components/PictureGridModal";
import FullScreenImageModal from "./components/FullScreenImageModal";
import QuestsModal from "./components/QuestsModal";
import HoldableButton from "./components/HoldableButton";

import {
  addExp,
  toggleTask,
  cycleImage,
  handleImagePress,
  changeButtonColor,
  openModal,
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
  const [imageSize, setImageSize] = useState({ width: 200, height: 400 });
  const [timeoutId, setTimeoutId] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [showYellowModal, setShowYellowModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showRedModal, setShowRedModal] = useState(false);
  const [showGreenModal, setShowGreenModal] = useState(false);
  const [mainImage, setMainImage] = useState(images.original);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showQuestsModal, setShowQuestsModal] = useState(false);
  const bowlImage = require("./assets/FoodBowl.png");
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Take your morning dose",
      completed: false,
      reward: 5,
      image: require("./assets/InhalerIcon.png"),
    },
    {
      id: 2,
      text: "Do you daily journal",
      completed: false,
      reward: 3,
      image: require("./assets/Pen.png"),
    },
    {
      id: 3,
      text: "Wash your spacer",
      completed: false,
      reward: 7,
      image: require("./assets/Soap.png"),
    },
  ]);
  const [bkgImageSize, setBkgImageSize] = useState({ width: 0, height: 0 });

  const redPictures = [
    require("./carousel/food/burger_bowl.png"), // Replace with your image paths
    require("./carousel/food/burger_bowl.png"),
    require("./carousel/food/burger_bowl.png"),
  ];

  const greenPictures = [
    require("./assets/FoodBowl.png"),
    require("./carousel/food/burger_bowl.png"), // Replace with your image paths
    require("./carousel/food/icecream_bowl.png"),
    require("./carousel/food/oj_bowl.png"),
    require("./carousel/food/sushi_bowl.png"),
  ];

  const buttonImages = [
    { name: "green", src: require("./buttons/Clothes.png") },
    { name: "red", src: require("./buttons/Food.png") },
    { name: "yellow", src: require("./buttons/Journal.png") },
  ];

  const redBackgroundImage = require("./backgrounds/FoodBkg.png");
  const greenBackgroundImage = require("./backgrounds/ClosetBkg.png");
  const mainBackgroundImage = require("./backgrounds/main_bkg.png");

  const handleSelectBowl = (bowlImage) => {
    setSelectedBowl(bowlImage);
  };
  const handleSelectOutfit = (outfitImage) => {
    setSelectedOutfit(outfitImage); // Update the selected outfit
  };
  const handlePress = (amount) =>
    addExp(exp, setExp, level, setLevel, amount, MAX_EXP);
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
    <View style={styles.fullScreenContainer}>
      <Image source={mainBackgroundImage} style={styles.backgroundImage} />
      <View style={styles.container}>
        <QuestsModal
          visible={showQuestsModal}
          onClose={() => setShowQuestsModal(false)}
          tasks={tasks}
          toggleTask={toggleTask}
          handleOpenModal={handleOpenModal}
          setTasks={setTasks} // ADD THIS
          addExpFunction={handlePress} // ADD THIS (if needed)
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
          image={bowlImage}
          imageSize={{ width: 400, height: 200 }}
          carouselImages={redPictures}
          onSelectImage={handleSelectBowl}
          selectedImage={selectedBowl}
        />

        {/* Green Full-Screen Modal */}
        <FullScreenImageModal
          visible={showGreenModal}
          onClose={() => setShowGreenModal(false)}
          backgroundImage={backgroundImage}
          color={modalColor}
          image={image}
          imageSize={{ width: 200, height: 400 }}
          carouselImages={greenPictures}
          onSelectImage={handleSelectOutfit}
          selectedImage={selectedOutfit}
        />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "left",
          paddingHorizontal: 40,
        }}
      >
        <View style={styles.expContainer}>
          {/* Profile Picture (Ellipse) */}
          <Image
            source={require("./buttons/AlexPFP.png")} // Replace with your image path
            style={styles.profilePicture}
          />
          {/* Progress Bar with Text Overlay */}
          <View style={styles.progressBarWrapper}>
            <ProgressBar
              progress={(exp / MAX_EXP) * 100}
              height={30}
              borderRadius={15}
              backgroundColor="#FFFFFF"
              fillColor="#119DA4"
            />
            <Text style={styles.expText}>
              {exp} / {MAX_EXP}
            </Text>
          </View>
          {/*HOLD HOME BUTTON */}
          <HoldableButton
            imageSource={require("./buttons/Pressed.png")}
            onHoldComplete={() => setShowPinModal(true)}
          />
        </View>
        <View
          style={{
            backgroundColor: "#119DA4",
            width: 70,
            alignItems: "center",
            borderRadius: 15,
            height: 25,
            zIndex: 3,
            bottom: 5,
            right: 4,
          }}
        >
          <Text style={styles.levelText}>Level: {level}</Text>
        </View>
      </View>

      <View style={{ right: 150 }}>
        <ToggleButton
          showQuests={showQuests}
          onPress={() => {
            handleOpenModal("quests");
          }}
        />
      </View>
      <View style={{ top: 50, alignItems: "center", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <View style={{ top: 20 }}>
            <InteractiveImage
              image={selectedOutfit || image}
              imageSize={imageSize}
              onPressIn={handleImageTap}
            />
          </View>

          <View style={{ position: "absolute", left: "65%", bottom: -60 }}>
            <InteractiveImage
              image={selectedBowl || bowlImage} // Show the selected bowl or default bowl
              imageSize={{ width: 125, height: 200 }} // Adjust size as needed
              onPressIn={handleImageTap}
            />
          </View>
        </View>

        <ColorButtons
          images={buttonImages}
          onPress={(color) => handleOpenModal(color)}
        />
      </View>
    </View>
  );
};

export default GameScreen;
