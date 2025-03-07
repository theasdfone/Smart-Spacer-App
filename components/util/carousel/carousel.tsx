import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from 'expo-image';

type Prop = {
    count: number
    data: any
}

export default function CarouselComponent({count, data} : Prop) 
{
    const baseOptions = {
        parallaxScrollingOffset: -10,
        parallaxScrollingScale: 1,
        parallaxAdjacentItemScale: 1,
    }

    const [selected, setSelected] = useState(0);
    const ref = React.useRef<ICarouselInstance>(null); // Create a ref for the Carousel component

    const clickNext = () => {
        if(ref.current) {
            if(ref.current.getCurrentIndex() > 0) {
                ref.current.prev(); // Call the "prev" method on the ref
            }
        }
    }

    const clickPrev = () => {
        if(ref.current) {
            if(ref.current.getCurrentIndex() < count - 4){
                ref.current.next(); // Call the "next" method on the ref
            }
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        clickNext()
                    }}
                >
                    <Image 
                        style={styles.arrow}
                        source={require("./left-arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            <View 
                style={styles.itemContainer}
            >
                <Carousel
                    ref={ref}
                    width={75}
                    height={75}
                    style={{
                        width: 300,
                        height: 75
                    }}
                    data={data} 
                    modeConfig={baseOptions}
                    mode='parallax'
                    loop={false}
                    overscrollEnabled={false}
                    renderItem={ ({index, item}) => (
                        item ? (
                            <TouchableOpacity 
                            key={index}
                            onPress={() => {
                                setSelected(index);
                            }}
                            >
                                <Image 
                                    style={selected == index ? styles.selected : styles.content}
                                    source={item}
                                />
                            </TouchableOpacity>)
                         : (<View></View>)

                    )}>
                </Carousel>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        clickPrev()
                    }}
                >
                    <Image 
                        style={styles.arrow}
                        source={require("./right-arrow.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FAFDF6",
        borderRadius: 5,
    },

    itemContainer: {
        paddingVertical: 10
    },

    selected: {
        width: 75,
        height: 75,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "#119DA4",
    },

    content: {
        width: 75,
        height: 75,
        borderWidth: 1,
        borderRadius: 10,
    },

    arrow: {
        height: 50,
        width: 50
    }
})