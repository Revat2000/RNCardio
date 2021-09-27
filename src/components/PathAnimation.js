import React, { FunctionComponent } from "react";
import { View, StyleSheet, Dimensions, Animated, Easing } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import d from "./svg-path";

const { width, height } = Dimensions.get("screen");

const AnimatedChart = () => {
  // const AnimatedRect = Animated.createAnimatedComponent(Rect);
  const AnimatedRect = Animated.createAnimatedComponent(View);
  // const animatedVal = React.useRef(new Animated.Value(-10)).current;
  const animatedVal = React.useRef(new Animated.Value(-8)).current;
  const animatedVal2 = React.useRef(new Animated.Value(-8)).current;

  const chartWidth = width - 30;
  const chartHeight = height / 2;

  const start = `0, ${chartHeight}`;
  const controlPointA = `${chartWidth / 3} ${chartHeight / 20}`;
  const controlPointB = `${(chartWidth / 3) * 2} ${chartHeight}`;
  const end = `${chartWidth} ${chartHeight / 2}`;

  const originX = animatedVal.interpolate({
    inputRange: [0, 10],
    outputRange: [1, chartWidth ],
  });

  const originX2 = animatedVal2.interpolate({
    inputRange: [0, 10],
    outputRange: [1, chartWidth],
  });

  // React.useEffect(() => {
  //   Animated.timing(animatedVal, {
  //     toValue: 10,
  //     duration: 3000,
  //     useNativeDriver: true,
  //     easing: Easing.linear,
  //   }).start();
  // }, []);

  // const EKGAnimation = () => {
  //   Animated.loop(
  //     Animated.timing(animatedVal, {
  //       toValue: 10,
  //       duration: 5500,
  //       useNativeDriver: true,
  //       easing: Easing.linear,
  //     })
  //   ).start();
  // };
  console.log(chartWidth);

  const EKGAnimation = () => {
    Animated.loop(
      Animated.timing(animatedVal, {
        toValue: 10,
        duration: 7000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };
  const EKGAnimation2 = () => {
    Animated.loop(
      Animated.timing(animatedVal2, {
        toValue: 10,
        duration: 7000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  React.useEffect(() => {
    EKGAnimation();
    EKGAnimation2();
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={1200} height={chartHeight} style={styles.svg}>
        <Path d={d} stroke={"#18FFFF"} strokeWidth={3} />
        {/* <AnimatedRect
          x={originX}
          y={0}
          width={chartWidth}
          height={chartHeight}
          fill={"black"}
        /> */}
        <View style={styles.animatedBox}>
          {/* <Animated.View
            style={[
              // styles.box2,
              styles.blue_box,
              {
                transform: [
                  {
                    translateX: originX,
                  },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              // colors={["rgba(0,0,0,10)", "rgba(0,0,0,1)","transparent"]}
              end={[1, 0]}
              style={styles.background}
            />
          </Animated.View> */}

          <Animated.View
            style={[
              // styles.box2,
              styles.green_box,
              {
                transform: [
                  {
                    translateX: originX2,
                  },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              // colors={["rgba(0,0,0,10)", "rgba(0,0,0,1)","transparent"]}
              end={[1, 0]}
              style={styles.background}
            />
          </Animated.View>
        </View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    // borderWidth: 3,
    borderColor: "white",
  },
  animatedBox: {
    flexDirection: "row",
  },
  blue_box: {
    alignSelf: "flex-start",
    width: "2%",
    height: "100%",
    // borderWidth: 1,
    borderColor: "red",
    zIndex: 100,
    overflow: 'visible'
  },
  green_box: {
    alignSelf: "flex-start",
    width: "90%",
    height: "100%",
    // borderWidth: 1,
    borderColor: "green",
    zIndex: 1,
    overflow: 'visible'
  },
  background: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

export default AnimatedChart;














// import React, { FunctionComponent } from "react";
// import { View, StyleSheet, Dimensions, Animated, Easing } from "react-native";
// import Svg, { Path, Rect } from "react-native-svg";
// import { LinearGradient } from "expo-linear-gradient";

// import d from "./svg-path";

// const { width, height } = Dimensions.get("screen");

// const AnimatedChart: FunctionComponent = () => {
//   // const AnimatedRect = Animated.createAnimatedComponent(Rect);
//   const AnimatedRect = Animated.createAnimatedComponent(View);
//   // const animatedVal = React.useRef(new Animated.Value(-10)).current;
//   const animatedVal = React.useRef(new Animated.Value(-8)).current;
//   const animatedVal2 = React.useRef(new Animated.Value(-8)).current;

//   const chartWidth = width - 30;
//   const chartHeight = height / 2;

//   const start = `0, ${chartHeight}`;
//   const controlPointA = `${chartWidth / 3} ${chartHeight / 20}`;
//   const controlPointB = `${(chartWidth / 3) * 2} ${chartHeight}`;
//   const end = `${chartWidth} ${chartHeight / 2}`;

//   const originX = animatedVal.interpolate({
//     inputRange: [0, 10],
//     outputRange: [1, chartWidth ],
//   });

//   const originX2 = animatedVal2.interpolate({
//     inputRange: [0, 10],
//     outputRange: [1, chartWidth],
//   });

//   // React.useEffect(() => {
//   //   Animated.timing(animatedVal, {
//   //     toValue: 10,
//   //     duration: 3000,
//   //     useNativeDriver: true,
//   //     easing: Easing.linear,
//   //   }).start();
//   // }, []);

//   // const EKGAnimation = () => {
//   //   Animated.loop(
//   //     Animated.timing(animatedVal, {
//   //       toValue: 10,
//   //       duration: 5500,
//   //       useNativeDriver: true,
//   //       easing: Easing.linear,
//   //     })
//   //   ).start();
//   // };
//   console.log(chartWidth);

//   const EKGAnimation = () => {
//     Animated.loop(
//       Animated.timing(animatedVal, {
//         toValue: 10,
//         duration: 7000,
//         useNativeDriver: true,
//         easing: Easing.linear,
//       })
//     ).start();
//   };
//   const EKGAnimation2 = () => {
//     Animated.loop(
//       Animated.timing(animatedVal2, {
//         toValue: 10,
//         duration: 7000,
//         useNativeDriver: true,
//         easing: Easing.linear,
//       })
//     ).start();
//   };

//   React.useEffect(() => {
//     EKGAnimation();
//     EKGAnimation2();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Svg width={1200} height={chartHeight} style={styles.svg}>
//         <Path d={d} stroke={"#18FFFF"} strokeWidth={3} />
//         {/* <AnimatedRect
//           x={originX}
//           y={0}
//           width={chartWidth}
//           height={chartHeight}
//           fill={"black"}
//         /> */}
//         <View style={styles.animatedBox}>
//           {/* <Animated.View
//             style={[
//               // styles.box2,
//               styles.blue_box,
//               {
//                 transform: [
//                   {
//                     translateX: originX,
//                   },
//                 ],
//               },
//             ]}
//           >
//             <LinearGradient
//               colors={["rgba(0,0,0,0.8)", "transparent"]}
//               // colors={["rgba(0,0,0,10)", "rgba(0,0,0,1)","transparent"]}
//               end={[1, 0]}
//               style={styles.background}
//             />
//           </Animated.View> */}

//           <Animated.View
//             style={[
//               // styles.box2,
//               styles.green_box,
//               {
//                 transform: [
//                   {
//                     translateX: originX2,
//                   },
//                 ],
//               },
//             ]}
//           >
//             <LinearGradient
//               colors={["rgba(0,0,0,0.8)", "transparent"]}
//               // colors={["rgba(0,0,0,10)", "rgba(0,0,0,1)","transparent"]}
//               end={[1, 0]}
//               style={styles.background}
//             />
//           </Animated.View>
//         </View>
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   svg: {
//     // borderWidth: 3,
//     borderColor: "white",
//   },
//   animatedBox: {
//     flexDirection: "row",
//   },
//   blue_box: {
//     alignSelf: "flex-start",
//     width: "2%",
//     height: "100%",
//     // borderWidth: 1,
//     borderColor: "red",
//     zIndex: 100,
//     overflow: 'visible'
//   },
//   green_box: {
//     alignSelf: "flex-start",
//     width: "90%",
//     height: "100%",
//     // borderWidth: 1,
//     borderColor: "green",
//     zIndex: 1,
//     overflow: 'visible'
//   },
//   background: {
//     // position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: "100%",
//   },
// });

// export default AnimatedChart;
