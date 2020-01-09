import React from 'react'
import { StyleSheet , View , Text , TouchableWithoutFeedback } from 'react-native'
import words from './InsultsData.js';
import { isUpperCase , getRandomInt , getRandomWord , isVowel } from './Tools';

class Sentence extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gender: getRandomWord(["male", "female"]),
      sentence: "Clic pour générer un compliment"
    }
  }

  _getSubject() {
    var subject = getRandomWord(words.subject[this.state.gender]);
    return (
      isUpperCase(subject[0]) ?
        subject :
        getRandomWord(words.possessive[this.state.gender]) + " " + subject
    )
  }

  _getAmplifier(subject) {
    var amplifier = getRandomWord(words.amplifier);
    if (subject == "Espéce")
      var pronom = isVowel(amplifier[0]) ? "d\'" : ("de" + ' ');
    else
      var pronom = isVowel(amplifier[0]) ? "l\'" : words.pronom[this.state.gender] + ' ';
    return pronom + amplifier
  }

  _getSentence() {
    var subject = this._getSubject(this.state.gender);
    return (
      subject + ' ' +
      this._getAmplifier(subject, this.state.gender) + ' '
    )
  }

  _loadSentence() {
    this.setState({ sentence: this._getSentence() })
  }

  render () {
    var gender = getRandomWord(["male", "female"]);
    return (
      <TouchableWithoutFeedback onPress={() => this._loadSentence()}>
        <View style={styles.main_container}>
          <View style={styles.sentence_container}>
            <Text style={styles.sentence_text}>
              {this.state.sentence}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#CECECE"
  },
  sentence_container: {
    width: "80%",
    minHeight: "20%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  sentence_text: {
    fontSize: 20
  }
})

export default Sentence
