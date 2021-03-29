import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const FirstRoute = () => (
  <View
    style={[
      styles.scene,
      {
        backgroundColor: "white",
        marginVertical: 50,
        alignSelf: "center",
      },
    ]}
  >
    <Text>No Description for this item </Text>
  </View>
);

const SecondRoute = () => (
  <View
    style={[
      styles.scene,
      {
        backgroundColor: "white",
        marginVertical: 50,
        alignSelf: "center",
      },
    ]}
  >
    <Text>No Features for this item </Text>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]} />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: colors.black,
          margin: 7,
          fontSize: Styles.FontSizes.small,
        }}
      >
        {route.title}
      </Text>
    )}
    indicatorStyle={{ backgroundColor: colors.secondary }}
    style={{ backgroundColor: colors.light }}
  />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function CustomTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Description" },
    { key: "second", title: "Features" },
    { key: "third", title: "Reviews" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  scene: {
    flex: 1,
  },
});
