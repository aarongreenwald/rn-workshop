import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import MarqueeLabel from '@remobile/react-native-marquee-label';
import * as actions from '../store/actions';

export default class HideousHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marqueeText: 'Chimpanzees with their tongues out are cool. I wonder if they are equally enamored by our antics.'
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.incrementVisitorCount());
  }

  changeMarqueeText(marqueeText) {
    this.setState({
      marqueeText
    });
  }

  render() {
    const {visitorCount, navigateToMonkeyList} = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../images/orange.jpg')} style={styles.backgroundImage}>
            <Text style={styles.text}>
              Hello There. My name is Aaron Greenwald.
            </Text>
            <Text style={styles.text}>You are visitor #{visitorCount}</Text>
            <TouchableOpacity onPress={navigateToMonkeyList}><Text style={styles.text}>Check out some cool pictures!!</Text></TouchableOpacity>
            <View style={styles.setMarquee}>
              <TextInput
                onChangeText={this.changeMarqueeText.bind(this)}
                style={styles.textInput}
                placeholder={'Update marquee text'}
              />
            </View>
            <MarqueeLabel style={styles.marqueeLabel}
                          text={this.state.marqueeText}
                          marqueeType="MLContinuous"
                          scrollDuration={10.0}
                          fadeLength={0.0}
                          leadingBuffer={0.0}
                          trailingBuffer={50}
                          textColor='#ccc'
                          font={{fontSize:60, fontWeight: 0.4}}
            />

        </Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  setMarquee: {
    flexDirection: 'row',
    padding: 10
  },
  textInput: {
    backgroundColor: '#fff',
    flex: 1,
    height: 25,
    width: 300,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'stretch'
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1
  },
  text: {
    padding: 5,
    backgroundColor: '#fff',
    fontFamily: 'Bradley Hand'
  },
  marqueeLabel: {
    backgroundColor: '#FFFFE0',
    flexDirection: 'row',
    alignSelf: 'stretch',
    height:140
  }
});