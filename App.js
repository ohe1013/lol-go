import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { IonIcons, Fontisto } from "@expo/vector-icons";
import localhost from "react-native-localhost";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const [name, setName] = useState("롤고대기중");
  const [days, setDays] = useState([]);

  const API_KEY = "189a274a058fcba23df31b6621b40ed9";

  const icons = {
    Clouds: "cloudy",
    Clear: "day-sunny",
    Atmosphere: "cloudy-gusts",
    Snow: "snow",
    Rain: "rains",
    Drizzle: "rain",
    Thunderstrom: "lightning",
  };

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setName(location[0].country + " " + location[0].district);
    const response = await fetch(`http://${localhost}:8000/`)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {});
    console.log("Ssssssss", response.id);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{name}</Text>
      </View>
      <ScrollView pagingEnabled showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator color="white" style={{ marginTop: 10 }}></ActivityIndicator>
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.temp}>{parseFloat(day.main.temp).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={30} color="white"></Fontisto>
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "white",
    fontSize: 48,
    fontWeight: "600",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
  },
  temp: {
    color: "white",
    marginTop: 10,
    fontSize: 100,
  },
  description: {
    color: "white",
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    color: "white",
    fontSize: 20,
  },
});
