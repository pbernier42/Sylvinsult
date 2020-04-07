import React from 'react'
import { StyleSheet , View , Text , TouchableWithoutFeedback} from 'react-native'
import words from './InsultsData.js';
import { isUpperCase , getRandomInt , getRandomWord , isVowel , getTunedWord , getTunedSentence } from './Tools';
import Speech frome 'react-native-speech'

class Sentence extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sentence: "Clic pour générer un compliment"
    }
  }

  _getSubject(gender) {
    var subject = getRandomWord(words.subject[gender]);
    return (
      isUpperCase(subject[0]) ?
        subject :
        getRandomWord(words.possessive[gender]) + " " + subject
    )
  }

  _getAmplifier(gender, subject) {
    var amplifier = getRandomWord(words.amplifier);
    if (subject == "Espéce")
      var pronom = isVowel(amplifier[0]) ? "d\'" : ("de" + ' ');
    else
      var pronom = isVowel(amplifier[0]) ? "l\'" : words.pronom[gender] + ' ';
    return pronom + amplifier
  }

  _getName(gender) {
    return getRandomWord(words.name[gender])
  }

  _getComplement(gender, adjectif) {
    var adjectif = getRandomWord(words.adjectif);
    var complement = getRandomWord(words.complement.concat(words.adjectif.filter(word => word != adjectif)));
    return getTunedSentence(gender, adjectif + ' ' + complement)
  }

  _getSentence() {
    var gender = getRandomWord(["male", "female"]);
    var subject = this._getSubject(gender);
    var amplifier = this._getAmplifier(gender, subject);
    var name = this._getName(gender);
    var complement = this._getComplement(gender);
    return subject + ' ' + amplifier + ' ' + name + ' ' + complement
  }

  _loadSentence() {
    var print = this._getSentence();
    this.setState({ sentence: print });

  }

  render () {
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
    fontSize: 20,
    textAlign: "center"
  }
})

export default Sentence
