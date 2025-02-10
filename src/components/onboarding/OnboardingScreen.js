import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "expo-router";

// Import Onboarding Images
import onboarding1 from '../../../assets/images/home/onboarding1.png';
import onboarding2 from '../../../assets/images/home/onboarding2.png';
import onboarding3 from '../../../assets/images/home/onboarding3.png';
import '../../../assets/css/onboarding.css';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  // Custom Done Button
  const DoneButton = ({ ...props }) => (
    <TouchableOpacity {...props} style={styles.doneButton}>
      <Text style={styles.doneButtonText}>Get Started</Text>
    </TouchableOpacity>
  );

  // Custom Next Button
  const NextButton = ({ ...props }) => (
    <TouchableOpacity {...props} style={styles.nextButton}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Onboarding
        onSkip={() => navigation.replace("home")} // Skip navigates to home
        onDone={() => navigation.replace("home")} // Done navigates to home
        DoneButtonComponent={DoneButton}
        NextButtonComponent={NextButton}
        bottomBarHighlight={false} // Removes bottom highlight
        showSkip={false} // Hides the skip button
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={onboarding1} style={styles.image} />,
            title: "Welcome to India Court",
            subtitle: "Your trusted legal companion for expert advice and seamless legal services.",
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: "#fff",
            image: <Image source={onboarding2} style={styles.image} />,
            title: "Expert Guidance",
            subtitle: "Connect with top lawyers, access legal documents, and resolve disputes effortlessly.",
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: "#fff",
            image: <Image source={onboarding3} style={styles.image} />,
            title: "Quick & Easy Access",
            subtitle: "Track cases, e-sign documents, and stay updated with legal news.",
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ]}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24, // Increased font size
    fontWeight: "bold",
    color: "#CD7707",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18, // Slightly bigger font size
    color: "#444", // Darker text for better contrast
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  doneButton: {
    backgroundColor: "#007bff", // Changed to blue
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginRight: 20,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  nextButton: {
    backgroundColor: "#007bff", // Changed to blue
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginRight: 20,
  },
  nextButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default OnboardingScreen;
