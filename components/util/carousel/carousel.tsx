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
      if (ref.current.getCurrentIndex() < images.length - 4) {
        ref.current.next(); // Go to the next item
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <View>
        <TouchableOpacity onPress={clickNext}>
          <Image style={styles.arrow} source={require('./left-arrow.png')} />
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <View style={styles.itemContainer}>
        <Carousel
          ref={ref}
          width={75}
          height={75}
          style={{ width: 270, height: 75 }}
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
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Right Arrow */}
      <View>
        <TouchableOpacity onPress={clickPrev}>
          <Image style={styles.arrow} source={require('./right-arrow.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFDF6',
    borderRadius: 5,
  },
  itemContainer: {
    paddingVertical: 10,
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