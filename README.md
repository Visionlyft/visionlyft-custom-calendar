# @visionlyft/custom-calendar

A custom calendar component for React Native.

## Overview

`@visionlyft/custom-calendar` is a versatile and customizable calendar component designed specifically for React Native applications. It provides developers with an easy-to-use interface and a variety of customization options to integrate a functional and visually appealing calendar into their mobile apps.

## Features

- **Customizable UI**: Easily modify the look and feel to match your app's design.
- **Event Handling**: Add, remove, and manage events efficiently.
- **Localization Support**: Adapt the calendar for different languages and regions.
- **Performance Optimized**: Built to handle large datasets without compromising on performance.
- **Cross-Platform Compatibility**: Works seamlessly on both iOS and Android devices.

## Installation

To install the `@visionlyft/custom-calendar` package, use npm:

```sh
npm install @visionlyft/custom-calendar
```

## Usage

### Default Use

Here's how to use the calendar with default settings in your React Native application:

```javascript
import React from "react";
import { View } from "react-native";
import { CustomCalendar } from "@visionlyft/custom-calendar";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomCalendar />
    </View>
  );
};

export default App;
```

### Customized Use

For more advanced use, you can customize the calendar's appearance and behavior:

```javascript
import React from "react";
import { View } from "react-native";
import { CustomCalendar } from "@visionlyft/custom-calendar";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomCalendar
        onSubmit={(date) => console.log(date)}
        containerStyle={{ backgroundColor: "lightgrey", borderRadius: 10 }}
        headerStyle={{ backgroundColor: "skyblue", padding: 10 }}
        headerTextStyle={{ color: "white", fontSize: 20 }}
        navButtonStyle={{ color: "white", fontSize: 16 }}
        cellTextStyle={{ color: "black", fontSize: 14 }}
        cellStyle={{ backgroundColor: "lightblue", borderRadius: 5 }}
        prevIcon={<FontAwesome name="arrow-left" size={24} color="black" />}
        nextIcon={<FontAwesome name="arrow-right" size={24} color="black" />}
        selectedDateCellStyle={{ backgroundColor: "green" }}
      />
    </View>
  );
};

export default App;
```

## Author

This package is developed and maintained by [Javed Khan](https://github.com/thejaved). You can find more of his work and contributions on his [GitHub profile](https://github.com/thejaved).

## Website

For more information, updates, and support, visit the [VisionLyft website](https://www.visionlyft.com/).
