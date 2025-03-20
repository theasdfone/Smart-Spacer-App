import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from 'expo-image';

type Props = {
  images: any[]; // Array of carousel images
  onSelectImage: (image: any) => void; // Callback when an image is selected
  selectedImage: any; // Currently selected image
};

export default function CarouselComponent({ images, onSelectImage, selectedImage }: Props) {
  const baseOptions = {
    parallaxScrollingOffset: -10,
    parallaxScrollingScale: 1,
    parallaxAdjacentItemScale: 1,
  };

  const ref = useRef<ICarouselInstance>(null); // Ref for the Carousel component

  const clickNext = () => {
    if (ref.current) {
      if (ref.current.getCurrentIndex() > 0) {
        ref.current.prev(); // Go to the previous item
      }
    }
  };

  const clickPrev = () => {
    if (ref.current) {
      if (ref.current.getCurrentIndex() < images.length - 1) { // Adjusted condition
        ref.current.next(); // Go to the next item
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <TouchableOpacity onPress={clickNext} style={styles.arrowContainer}>
        <Image style={styles.arrow} source={require('./left-arrow.png')} />
      </TouchableOpacity>

      {/* Carousel */}
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={ref}
          width={75}
          height={75}
          style={{ width: '100%', height: 75 }} // Use 100% width
          data={images}
          modeConfig={baseOptions}
          mode="parallax"
          loop={false}
          overscrollEnabled={false}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              key={index}
              onPress={() => onSelectImage(item)} // Notify parent of the selected image
            >
              <Image
                style={selectedImage === item ? styles.selected : styles.content}
                source={item}
                resizeMode="contain" // Ensure the image scales proportionally
              />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Right Arrow */}
      <TouchableOpacity onPress={clickPrev} style={styles.arrowContainer}>
        <Image style={styles.arrow} source={require('./right-arrow.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFDF6',
    borderRadius: 5,
    paddingHorizontal: 10, // Add horizontal padding to the container
  },
  carouselWrapper: {
    flex: 1, // Allow the carousel to take up remaining space
    overflow: 'visible', // Ensure content isn't clipped
  },
  arrowContainer: {
    padding: 5, // Add padding around the arrows
  },
  selected: {
    width: 75,
    height: 75,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#119DA4',
  },
  content: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 10,
  },
  arrow: {
    height: 50,
    width: 50,
  },
});