import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

  const [userNumber, setUserNumber] = useState(null);

  function sendendNumberHandler(sendendNumber) {
    setUserNumber(sendendNumber);
  }

  let screen = <GameStartScreen onSendNumber={sendendNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0,0,0,0.8)', 'transparent']}
    >
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={styles.container}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.3,
  },
});
