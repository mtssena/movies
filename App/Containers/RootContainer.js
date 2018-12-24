import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { setCustomText } from "react-native-global-props";

import Theme from "../Theme";
import ReduxNavigation from "../Navigation/ReduxNavigation";

class RootContainer extends Component {
  constructor(props) {
    super(props);

    const customTextProps = {
      style: {
        fontSize: Theme.fonts.fontSizeBase,
        fontFamily: Theme.fonts.defaultFontFamily,
        color: Theme.fonts.defaultColor
      }
    };

    setCustomText(customTextProps);
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <ReduxNavigation />
        </View>
      </ThemeProvider>
    );
  }
}

export default connect()(RootContainer);
