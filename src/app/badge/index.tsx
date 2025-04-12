import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  useWindowDimensions,
} from "react-native";
import { styles } from "./styles";
import { MotiView } from "moti";
import avatar from "@/assets/images/avatar.png";

export const Badge: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.motiView}
        from={{
          opacity: 0,
          translateY: -height,
          rotateZ: "50deg",
          rotateY: ["180deg", "360deg"],
        }}
        animate={{
          opacity: 1,
          rotateZ: "0deg",
          rotateY: "0deg",
          translateY: 0,
        }}
        transition={{
          damping: 20,
          type: "spring",
          rotateZ: {
            damping: 15,
            mass: 3,
          },
        }}
      >
        <View style={styles.badge}>
          <Image
            style={styles.band}
            source={require("@/assets/images/band.png")}
          />
          <ImageBackground
            source={require("@/assets/images/header.png")}
            resizeMode="cover"
            style={styles.background}
          >
            <View style={styles.header}>
              <Text style={styles.company}>Name of the Company</Text>
              <Text style={styles.id}>#1234567</Text>
            </View>
            <View style={styles.content}>
              <Image style={styles.image} source={avatar} />
              <Text style={styles.name}>Alexandre Marques</Text>
              <Text style={styles.email}>alexandreacm.marques@gmail.com</Text>
            </View>
          </ImageBackground>
        </View>
      </MotiView>
    </View>
  );
};
