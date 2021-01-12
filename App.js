import React, {useCallback, useState} from 'react';
import {
  Component,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Share,
  Dimensions,
  StatusBar,
  Linking,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
// import { RadioButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

import Sound from 'react-native-sound';

import AnimatedViewPager from '@react-native-community/viewpager';

import {NavigationPanel} from './component/NavigationPanel';
import {useNavigationPanel} from './hook/useNavigationPanel';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useRef} from 'react';

const Stack = createStackNavigator();

const whoosh = new Sound('AZ.mp3', Sound.MAIN_BUNDLE);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
        <Stack.Screen name="Alphabets" component={Alphabets} />
        <Stack.Screen name="Numbers" component={Numbers} />
        <Stack.Screen
          name="ShareshareApp"
          component={shareApp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AnswerScreen" component={AnswerScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Quiz" component={Quiz} />

        <Stack.Screen name="0" component={zero} />
        <Stack.Screen name="1" component={one} />
        <Stack.Screen name="2" component={two} />
        <Stack.Screen name="3" component={three} />
        <Stack.Screen name="4" component={four} />
        <Stack.Screen name="5" component={five} />
        <Stack.Screen name="6" component={six} />
        <Stack.Screen name="7" component={seven} />
        <Stack.Screen name="8" component={eight} />
        <Stack.Screen name="9" component={nine} />
        <Stack.Screen name="10" component={ten} />
        <Stack.Screen name="11" component={eleven} />
        <Stack.Screen name="12" component={twelve} />
        <Stack.Screen name="13" component={thirteen} />
        <Stack.Screen name="14" component={forteen} />
        <Stack.Screen name="15" component={fifteen} />
        <Stack.Screen name="16" component={sixteen} />
        <Stack.Screen name="17" component={seventeen} />
        <Stack.Screen name="18" component={eighteen} />
        <Stack.Screen name="19" component={nineteen} />
        <Stack.Screen name="20" component={twenty} />

        <Stack.Screen name="A" component={AlphabetDetails1} />
        <Stack.Screen name="B" component={AlphabetDetails2} />
        <Stack.Screen name="C" component={AlphabetDetails3} />
        <Stack.Screen name="D" component={AlphabetDetails4} />
        <Stack.Screen name="E" component={AlphabetDetails5} />
        <Stack.Screen name="F" component={AlphabetDetails6} />
        <Stack.Screen name="G" component={AlphabetDetails7} />
        <Stack.Screen name="H" component={AlphabetDetails8} />
        <Stack.Screen name="I" component={AlphabetDetails9} />
        <Stack.Screen name="J" component={AlphabetDetails10} />
        <Stack.Screen name="K" component={AlphabetDetails11} />
        <Stack.Screen name="L" component={AlphabetDetails12} />
        <Stack.Screen name="M" component={AlphabetDetails13} />
        <Stack.Screen name="N" component={AlphabetDetails14} />
        <Stack.Screen name="O" component={AlphabetDetails15} />
        <Stack.Screen name="P" component={AlphabetDetails16} />
        <Stack.Screen name="Q" component={AlphabetDetails17} />
        <Stack.Screen name="R" component={AlphabetDetails18} />
        <Stack.Screen name="S" component={AlphabetDetails19} />
        <Stack.Screen name="T" component={AlphabetDetails20} />
        <Stack.Screen name="U" component={AlphabetDetails21} />
        <Stack.Screen name="V" component={AlphabetDetails22} />
        <Stack.Screen name="W" component={AlphabetDetails23} />
        <Stack.Screen name="X" component={AlphabetDetails24} />
        <Stack.Screen name="Y" component={AlphabetDetails25} />
        <Stack.Screen name="Z" component={AlphabetDetails26} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  let text =
    "Want to Learn alphabets and numbers?\n\nLet's make learning fun..\nDownload Fun Alphabets and Numbers 2021";
  if (Platform.OS === 'android')
    text = text.concat(
      'https://play.google.com/store/apps/details?id=com.fun.alphanum2021',
    );
  else text = text.concat('http://itunes.apple.com/app/id1547972296');
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="resize"
        source={require('./assets/Backgrounds/BackgroundSelect.jpeg')}
        style={styles.image}>
        {/* <View>
          <Image source={require('./assets/welcome.jpg')} style={{ height: '70%', width: '100%' }} ></Image>
        </View> */}
        <View style={styles.playButtonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SelectScreen')}>
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
          <View style={{height: 10}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              // navigation.navigate('SelectScreen')

              Share.share(
                {
                  subject: 'Download Fun Alphabet and Numbers 2021 App Now',
                  title: 'Download Fun Alphabet and Numbers 2021 App Now',
                  message: text,
                  url: 'app://Fun Alphabet and Numbers 2021 ',
                },
                {
                  // Android only:
                  dialogTitle: 'Fun Alphabet and Numbers 2021 App',
                  // iOS only:
                  excludedActivityTypes: [],
                },
              )
            }>
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const RadioButton = (props) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={props.onPress}>
      {props.checked ? <View style={styles.checkedCircle} /> : <View />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#131313', // You can set it default or with yours one…
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  detailsView: {
    flexDirection: 'column',
    // marginTop: '20%'
  },
  playButtonView: {
    marginTop: '70%',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 50,
  },
  imageForQuiz: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'white',
    // fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: "#000000a0"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  mainView: {
    height: '100%',
    width: '100%',
    // marginTop: 100,
    flex: 1,
  },
  imageView: {
    alignSelf: 'center',
  },
  textView: {
    marginLeft: 16,
    marginRight: 16,
  },
  textStyle: {
    marginTop: 32,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  imageDetails: {
    height: 200,
    width: 200,
  },
});

const shareApp = () => {
  let text =
    "Want to Learn alphabets and numbers?\n\nLet's make learning fun..\nDownload Fun Alphabets and Numbers 2021";
  if (Platform.OS === 'android')
    text = text.concat(
      'https://play.google.com/store/apps/details?id=com.fun.alphanum2021',
    );
  else text = text.concat('http://itunes.apple.com/app/id1547972296');

  Share.share(
    {
      subject: 'Download Fun Alphabet and Numbers 2021 App Now',
      title: 'Download Fun Alphabet and Numbers 2021 App Now',
      message: text,
      url: 'app://TopList Nature 2021',
    },
    {
      // Android only:
      dialogTitle: 'Fun Alphabet and Numbers 2021 App',
      // iOS only:
      excludedActivityTypes: [],
    },
  );
};

const SelectScreen = ({navigation}) => {
  const openPrv = () => {
    Linking.openURL(
      `https://elit-blogs.blogspot.com/2021/01/fun-alphabet-and-numbers-2021.html`,
    ).catch((err) => alert('Please check for the App Store'));
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/Backgrounds/SelectScreenBackground.jpeg')}
        style={styles.image}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            marginLeft: 16,
            marginRight: 16,
            alignItems: 'center',
          }}>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Alphabets')}>
            <Text style={styles.text}>Alphabets</Text>
          </TouchableOpacity>
          <View style={{height: 5}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Numbers')}>
            <Text style={styles.text}>Number</Text>
          </TouchableOpacity>
          <View style={{height: 5}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.text}>Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openPrv}>
            <Text
              style={{color: '#fff', paddingBottom: '12%', fontWeight: 'bold', marginTop:'5%'}}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const Numbers = ({navigation}) => {
  const arrayTemp = [
    {
      id: 0,
      src: require('./assets/icons/zero.png'),
      character: '0',
    },

    {
      id: 1,
      src: require('./assets/icons/one.png'),
      character: '1',
    },
    {
      id: 2,
      src: require('./assets/icons/two.png'),
      character: '2',
    },
    {
      id: 3,
      src: require('./assets/icons/three.png'),
      character: '3',
    },
    {
      id: 4,
      src: require('./assets/icons/four.png'),
      character: '4',
    },
    {
      id: 5,
      src: require('./assets/icons/five.png'),
      character: '5',
    },
    {
      id: 6,
      src: require('./assets/icons/six.png'),
      character: '6',
    },
    {
      id: 7,
      src: require('./assets/icons/seven.png'),
      character: '7',
    },
    {
      id: 8,
      src: require('./assets/icons/eight.png'),
      character: '8',
    },
    {
      id: 9,
      src: require('./assets/icons/nine.png'),
      character: '9',
    },
    {
      id: 10,
      src: require('./assets/icons/ten.png'),
      character: '10',
    },
    {
      id: 11,
      src: require('./assets/icons/eleven.png'),
      character: '11',
    },
    {
      id: 12,
      src: require('./assets/icons/twelve.png'),
      character: '12',
    },
    {
      id: 13,
      src: require('./assets/icons/thirteen.png'),
      character: '13',
    },
    {
      id: 14,
      src: require('./assets/icons/forteen.png'),
      character: '14',
    },
    {
      id: 15,
      src: require('./assets/icons/fifteen.png'),
      character: '15',
    },
    {
      id: 16,
      src: require('./assets/icons/sixteen.png'),
      character: '16',
    },
    {
      id: 17,
      src: require('./assets/icons/seventeen.png'),
      character: '17',
    },
    {
      id: 18,
      src: require('./assets/icons/eighteen.png'),
      character: '18',
    },
    {
      id: 19,
      src: require('./assets/icons/nineteen.png'),
      character: '19',
    },
    {
      id: 20,
      src: require('./assets/icons/twenty.png'),
      character: '20',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./assets/backgroundListing.jpg')}
        style={styles.image}>
        <View style={styles.detailsView}>
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <View style={{marginTop: '20%'}} />
            <Text style={{fontSize: 30}}>Select A Number</Text>
          </View>
          <FlatList
            data={arrayTemp}
            renderItem={({item}) => {
              var page = item.id;

              // var path =''+item.src.trim();
              // console.log(item.src)

              return item.id <= 26 ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.character)}>
                    <Image style={styles.imageThumbnail} source={item.src} />
                    {/* {console.log(item.id+1)} */}
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1,
                    alignItems: 'center',
                  }}
                />
              );
            }}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const zero = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/zero.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const one = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/one.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const two = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/two.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const three = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/three.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const four = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/four.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const five = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/five.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const six = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/six.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const seven = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/seven.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const eight = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/eight.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const nine = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/nine.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const ten = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/ten.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const eleven = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/eleven.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const twelve = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/twelve.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const thirteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/thirteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const forteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/forteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const fifteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/fifteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const sixteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/sixteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const seventeen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/seventeen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const eighteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/eighteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const nineteen = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/nineteen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const twenty = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/twenty.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const Alphabets = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);

  var arr = 1;

  const arrayTemp = [
    {
      id: 1,
      src: require('./assets/icons/1.png'),
      character: 'A',
      option1: 'Apple',
      option2: 'Mango',
      option3: 'Banana',
      options4: 'PineApple',
      ans: 'Apple',
    },
    {
      id: 2,
      src: require('./assets/icons/2.png'),
      character: 'B',
      option1: 'House',
      option2: 'Car',
      option3: 'Ball',
      options4: 'Ballon',
      ans: 'Ball',
    },
    {
      id: 3,
      src: require('./assets/icons/3.png'),
      character: 'C',
      option1: 'Horse',
      option2: 'Mouse',
      option3: 'Dog',
      options4: 'Cat',
      ans: 'Cat',
    },
    {
      id: 4,
      src: require('./assets/icons/4.png'),
      character: 'D',
      option1: 'Cow',
      option2: 'Dog',
      option3: 'Deer',
      options4: 'Lion',
      ans: 'Dog',
    },
    {
      id: 5,
      src: require('./assets/icons/5.png'),
      character: 'E',
      option1: 'Rat',
      option2: 'Cat',
      option3: 'Mouse',
      options4: 'Elephant',
      ans: 'Elephant',
    },
    {
      id: 6,
      src: require('./assets/icons/6.png'),
      character: 'F',
      option1: 'Fish',
      option2: 'Flies',
      option3: 'Bird',
      options4: 'Lizard',
      ans: 'Fish',
    },
    {
      id: 7,
      src: require('./assets/icons/7.png'),
      character: 'G',
      option1: 'Frog',
      option2: 'Fox',
      option3: 'Snake',
      options4: 'Goat',
      ans: 'Goat',
    },
    {
      id: 8,
      src: require('./assets/icons/8.png'),
      character: 'H',
      option1: 'Zebra',
      option2: 'Tiger',
      option3: 'Horse',
      options4: 'Ant',
      ans: 'Horse',
    },
    {
      id: 9,
      src: require('./assets/icons/9.png'),
      character: 'I',
      option1: 'Burger',
      option2: 'Pizza',
      option3: 'Pasta',
      options4: 'Ice-Cream',
      ans: 'Ice-Cream',
    },
    {
      id: 10,
      src: require('./assets/icons/10.png'),
      character: 'J',
      option1: 'Bottle',
      option2: 'Jar',
      option3: 'Shoes',
      options4: 'Dish',
      ans: 'Jar',
    },
    {
      id: 11,
      src: require('./assets/icons/11.png'),
      character: 'K',
      option1: 'Keys',
      option2: 'Shoes',
      option3: 'Clothes',
      options4: 'Bike',
      ans: 'Keys',
    },
    {
      id: 12,
      src: require('./assets/icons/12.png'),
      character: 'L',
      option1: 'Mouse',
      option2: 'Dog',
      option3: 'Cat',
      options4: 'Lion',
      ans: 'Lion',
    },
    {
      id: 13,
      src: require('./assets/icons/13.png'),
      character: 'M',
      option1: 'Mat',
      option2: 'Shoes',
      option3: 'Clothes',
      options4: 'Cap',
      ans: 'Mat',
    },
    {
      id: 14,
      src: require('./assets/icons/14.png'),
      character: 'N',
      option1: 'House',
      option2: 'Dish',
      option3: 'Car',
      options4: 'Nest',
      ans: 'Nest',
    },
    {
      id: 15,
      src: require('./assets/icons/15.png'),
      character: 'O',
      option1: 'Parrot',
      option2: 'Owl',
      option3: 'Crow',
      options4: 'Sparrow',
      ans: 'Owl',
    },
    {
      id: 16,
      src: require('./assets/icons/16.png'),
      character: 'P',
      option1: 'Sparrow',
      option2: 'Owl',
      option3: 'Parrot',
      options4: 'Sparrow',
      ans: 'Parrot',
    },
    {
      id: 17,
      src: require('./assets/icons/17.png'),
      character: 'Q',
      option1: 'Soldier',
      option2: 'Farmer',
      option3: 'King',
      options4: 'Queen',
      ans: 'Queen',
    },
    {
      id: 18,
      src: require('./assets/icons/18.png'),
      character: 'R',
      option1: 'Rat',
      option2: 'Dog',
      option3: 'Cat',
      options4: 'Lion',
      ans: 'Rat',
    },
    {
      id: 19,
      src: require('./assets/icons/19.png'),
      character: 'S',
      option1: 'House',
      option2: 'Apple',
      option3: 'Sun',
      options4: 'Ballon',
      ans: 'Sun',
    },
    {
      id: 20,
      src: require('./assets/icons/20.png'),
      character: 'T',
      option1: 'Box',
      option2: 'Table',
      option3: 'Chair',
      options4: 'Ballon',
      ans: 'Table',
    },
    {
      id: 21,
      src: require('./assets/icons/21.png'),
      character: 'U',
      option1: 'Umbrella',
      option2: 'Table',
      option3: 'Chair',
      options4: 'Ballon',
      ans: 'Umbrella',
    },
    {
      id: 22,
      src: require('./assets/icons/22.png'),
      character: 'V',
      option1: 'Umbrella',
      option2: 'Table',
      option3: 'Chair',
      options4: 'Vase',
      ans: 'Vase',
    },
    {
      id: 23,
      src: require('./assets/icons/23.png'),
      character: 'W',
      option1: 'Watermelon',
      option2: 'Mango',
      option3: 'Banana',
      options4: 'PineApple',
      ans: 'Watermelon',
    },
    {
      id: 24,
      src: require('./assets/icons/24.png'),
      character: 'X',
      option1: 'Speaker',
      option2: 'Keyboard',
      option3: 'Xylophone',
      options4: 'Guitar',
      ans: 'Xylophone',
    },
    {
      id: 25,
      src: require('./assets/icons/25.png'),
      character: 'Y',
      option1: 'Yolk',
      option2: 'Banana',
      option3: 'Mango',
      options4: 'Apple',
      ans: 'Yolk',
    },
    {
      id: 26,
      src: require('./assets/icons/26.png'),
      character: 'Z',
      option1: 'Rat',
      option2: 'Dog',
      option3: 'Zebra',
      options4: 'Lion',
      ans: 'Zebra',
    },
    {
      id: 27,
      src: '',
    },
  ];

  useState(() => {
    let items = Array.apply(null, Array(26)).map((v, i) => {
      var source = './assets/icons/' + 1 + '.png';
      var source1 = './assets/icons/' + (i + 1) + '.png';
      arr++;
      return {id: i, src: require(source)};
    });

    setDataSource(items);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./assets/backgroundListing.jpg')}
        style={styles.image}>
        <View style={styles.detailsView}>
          <View style={{marginTop: '30%'}} />
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, color: '#000000'}}>
              Select an Alphabet
            </Text>
          </View>
          <FlatList
            data={arrayTemp}
            renderItem={({item}) => {
              var page = item.id;

              // var path =''+item.src.trim();
              // console.log(item.src)

              return item.id <= 26 ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.character)}>
                    <Image style={styles.imageThumbnail} source={item.src} />
                    {/* {console.log(item.id+1)} */}
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1,
                    alignItems: 'center',
                  }}
                />
              );
            }}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails1 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/apple.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            A or a is the first letter and the first vowel letter of the
            English. There are various words starting with A like Apple(image),
            Ant, Aunt.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails2 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/ball.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            B or b is the second letter of the English. There are various words
            starting with B like Ball(image), Banana, Bear.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails3 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/cat.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            C or c is the third letter of the English. There are various words
            starting with C like Cat(image), Car, Carrot.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails4 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/dog.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {' '}
            D or d is the fourth letter of the English. There are various words
            starting with D like Dog(image), Dad, Deer.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails5 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/elephant.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {' '}
            E or e is the fifth letter and the second vowel letter of the
            English. There are various words starting with E like
            Elephant(image), Ear, Eyes.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails6 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/Fish.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {' '}
            F or f is the sixth letter of the English. There are various words
            starting with F like Fish(image), Flower, Frog.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails7 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/grapes.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {' '}
            G or g is the seventh letter of the English. There are various words
            starting with G like Goat(image), Grapes, Ginger.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails8 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/horse.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {' '}
            H or h is the eighth letter of the English. There are various words
            starting with H like Horse(image), House, Horn.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails9 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/icecream.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            I or i is the ninth letter and the third vowel letter of the
            English. There are various words starting with I like
            Ice-Cream(image), Iron, Ice.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails10 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/jar.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            J or j is the tenth letter of the English. There are various words
            starting with J like Jar(image), Jug, Jam.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails11 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/key.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            K or k is the eleventh letter of the English. There are various
            words starting with K like Keys(image), Kite, King.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails12 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/lion.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            L is the twelfth letter of the English. There are various words
            starting with L like Lion(image), Legs, Lunch.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails13 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/mat.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            M or m is the thirteenth letter of the English. There are various
            words starting with M like Mat(image), Mouse, Milk.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails14 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/nest.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            N or n is the fourteenth letter of the English. There are various
            words starting with N like Nest(image), Nail, Net.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails15 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/owl.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            O or o is the fifteenth letter and fourth vowel letter of the
            English. There are various words starting with O like Owl(image),
            Octopus, Onion.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails16 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/parrot.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            P or p is the sixteenth letter letter of the English. There are
            various words starting with P like Parrot(image), Peacock, Pen.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails17 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/queen.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            Q or q is the 17th letter letter of the English. There are various
            words starting with Q like Queen(image), Quizz, Quest.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails18 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/rat.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            R or r is the 18th letter of the English. There are various words
            starting with R like Rat(image), Race, Rice.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails19 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/sun.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            S or s is the 19th letter of the English. There are various words
            starting with S like Rat(image), Race, Rice.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails20 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/table.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            T or t is the 20th letter of the English. There are various words
            starting with T like Table(image), Tap, Teacher.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails21 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/umbrealla.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            U or u is the 21st letter and fifth vowel letter of the English.
            There are various words starting with U like Umbrella(image),
            Uniform, Unicorn.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails22 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/vase.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            V or v is the 22nd and fifth-to-last letter of the English. There
            are various words starting with V like Vase(image), Van, Vegetable.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails23 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/watermelon.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            W or w is the 23rd and fourth-to-last letter of the English. There
            are various words starting with W like Watermelon(image), Whale,
            White.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails24 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/xmas.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            X or x is the 24th and third-to-last letter of the English. There
            are various words starting with X like Xylophone (image), Xmas Tree,
            X-ray.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails25 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/yolk.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            Y or y is the 25th and penultimate letter of the English. There are
            various words starting with X like Yolk(image), Yak, Yarn.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const AlphabetDetails26 = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDetails}
            source={require('./assets/icons/zebra.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            Z or z is the 26th and final letter of the English. There are
            various words starting with Y like Zebra(image), zero, Zero.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const Quiz = ({navigation}) => {
  const arrayTemp = [
    {
      id: 1,
      src: require('./assets/icons/apple.png'),
      character: 'A',
      option1: 'Apple',
      option2: 'Mango',
      option3: 'Banana',
      option4: 'PineApple',
      ans: 'option1',
    },
    {
      id: 2,
      src: require('./assets/icons/ball.png'),
      character: 'B',
      option1: 'House',
      option2: 'Car',
      option3: 'Ball',
      option4: 'Ballon',
      ans: 'option3',
    },
    {
      id: 3,
      src: require('./assets/icons/cat.png'),
      character: 'C',
      option1: 'Horse',
      option2: 'Mouse',
      option3: 'Dog',
      option4: 'Cat',
      ans: 'option4',
    },
    {
      id: 4,
      src: require('./assets/icons/dog.png'),
      character: 'D',
      option1: 'Cow',
      option2: 'Dog',
      option3: 'Deer',
      option4: 'Lion',
      ans: 'option2',
    },
    {
      id: 5,
      src: require('./assets/icons/elephant.png'),
      character: 'E',
      option1: 'Rat',
      option2: 'Cat',
      option3: 'Mouse',
      option4: 'Elephant',
      ans: 'option4',
    },
    {
      id: 6,
      src: require('./assets/icons/Fish.png'),
      character: 'F',
      option1: 'Fish',
      option2: 'Flies',
      option3: 'Bird',
      option4: 'Lizard',
      ans: 'option1',
    },
    {
      id: 7,
      src: require('./assets/icons/grapes.png'),
      character: 'G',
      option1: 'Frog',
      option2: 'Fox',
      option3: 'Snake',
      option4: 'Goat',
      ans: 'option4',
    },
    {
      id: 8,
      src: require('./assets/icons/horse.png'),
      character: 'H',
      option1: 'Zebra',
      option2: 'Tiger',
      option3: 'Horse',
      option4: 'Ant',
      ans: 'option3',
    },
    {
      id: 9,
      src: require('./assets/icons/icecream.png'),
      character: 'I',
      option1: 'Burger',
      option2: 'Pizza',
      option3: 'Pasta',
      option4: 'Ice-Cream',
      ans: 'option4',
    },
    {
      id: 10,
      src: require('./assets/icons/jar.png'),
      character: 'J',
      option1: 'Bottle',
      option2: 'Jar',
      option3: 'Shoes',
      option4: 'Dish',
      ans: 'option2',
    },
    {
      id: 11,
      src: require('./assets/icons/key.png'),
      character: 'K',
      option1: 'Keys',
      option2: 'Shoes',
      option3: 'Clothes',
      option4: 'Bike',
      ans: 'option1',
    },
    {
      id: 12,
      src: require('./assets/icons/lion.png'),
      character: 'L',
      option1: 'Mouse',
      option2: 'Dog',
      option3: 'Cat',
      option4: 'Lion',
      ans: 'option4',
    },
    {
      id: 13,
      src: require('./assets/icons/mat.png'),
      character: 'M',
      option1: 'Mat',
      option2: 'Shoes',
      option3: 'Clothes',
      option4: 'Cap',
      ans: 'option1',
    },
    {
      id: 14,
      src: require('./assets/icons/nest.png'),
      character: 'N',
      option1: 'House',
      option2: 'Dish',
      option3: 'Car',
      option4: 'Nest',
      ans: 'option4',
    },
    {
      id: 15,
      src: require('./assets/icons/owl.png'),
      character: 'O',
      option1: 'Parrot',
      option2: 'Owl',
      option3: 'Crow',
      option4: 'Sparrow',
      ans: 'option2',
    },
    {
      id: 16,
      src: require('./assets/icons/parrot.png'),
      character: 'P',
      option1: 'Sparrow',
      option2: 'Owl',
      option3: 'Parrot',
      option4: 'Sparrow',
      ans: 'option3',
    },
    {
      id: 17,
      src: require('./assets/icons/queen.png'),
      character: 'Q',
      option1: 'Soldier',
      option2: 'Farmer',
      option3: 'King',
      option4: 'Queen',
      ans: 'option4',
    },
    {
      id: 18,
      src: require('./assets/icons/rat.png'),
      character: 'R',
      option1: 'Rat',
      option2: 'Dog',
      option3: 'Cat',
      option4: 'Lion',
      ans: 'option1',
    },
    {
      id: 19,
      src: require('./assets/icons/sun.png'),
      character: 'S',
      option1: 'House',
      option2: 'Apple',
      option3: 'Sun',
      option4: 'Ballon',
      ans: 'option3',
    },
    {
      id: 20,
      src: require('./assets/icons/table.png'),
      character: 'T',
      option1: 'Box',
      option2: 'Table',
      option3: 'Chair',
      option4: 'Ballon',
      ans: 'option2',
    },
    {
      id: 21,
      src: require('./assets/icons/umbrealla.png'),
      character: 'U',
      option1: 'Umbrella',
      option2: 'Table',
      option3: 'Chair',
      option4: 'Ballon',
      ans: 'option1',
    },
    {
      id: 22,
      src: require('./assets/icons/vase.png'),
      character: 'V',
      option1: 'Umbrella',
      option2: 'Table',
      option3: 'Chair',
      option4: 'Vase',
      ans: 'option4',
    },
    {
      id: 23,
      src: require('./assets/icons/watermelon.png'),
      character: 'W',
      option1: 'Watermelon',
      option2: 'Mango',
      option3: 'Banana',
      option4: 'PineApple',
      ans: 'option1',
    },
    {
      id: 24,
      src: require('./assets/icons/xmas.png'),
      character: 'X',
      option1: 'Speaker',
      option2: 'Keyboard',
      option3: 'Xylophone',
      option4: 'Guitar',
      ans: 'option3',
    },
    {
      id: 25,
      src: require('./assets/icons/yolk.png'),
      character: 'Y',
      option1: 'Yolk',
      option2: 'Banana',
      option3: 'Mango',
      option4: 'option1',
    },
      {
      src: require('./assets/icons/zebra.png'),
      character: 'Z',
      option1: 'Rat',
      option2: 'Dog',
      option3: 'Zebra',
      option4: 'Lion',
      ans: 'option3',
    },
    {
      id: 27,
      src: '',
    },
  ];

  const [random1, setRandom1] = useState(1);
  const [random2, setRandom2] = useState(2);
  const [random3, setRandom3] = useState(3);
  const [random4, setRandom4] = useState(4);
  const [random5, setRandom5] = useState(5);
  const [randomnumber, setRandomnumber] = useState(0);
  const [radioSelected, setRadioSelected] = useState(0);
  const viepagerRef = useRef();

  const [value, setValue] = React.useState('first');

  var radiogroup_options = [
    {id: 0, label: 'Button1'},
    {id: 1, label: 'Button2'},
    {id: 2, label: 'Button3'},
    {id: 3, label: 'Button4'},
  ];

  useEffect(() => {
    var a = Math.floor(Math.random() * 25);
    var b = Math.floor(Math.random() * 25);
    var c = Math.floor(Math.random() * 25);
    var d = Math.floor(Math.random() * 25);
    var e = Math.floor(Math.random() * 25);
    // setRandom1(arrayTemp[a]);
    setRandom1(a);
    setRandom2(b);
    setRandom3(c);
    setRandom4(d);
    setRandom5(e);
    //   setRandom2(arrayTemp[Math.floor(Math.random() * 25)]);
    //   setRandom3(arrayTemp[Math.floor(Math.random() * 25)]);
    //   setRandom4(arrayTemp[Math.floor(Math.random() * 25)]);
    //   setRandom5(arrayTemp[Math.floor(Math.random() * 25)]);
    //
    console.log(arrayTemp[a]);
    console.log(arrayTemp[b]);
    console.log(arrayTemp[c]);
    console.log(arrayTemp[d]);
    console.log(arrayTemp[e]);

    // console.log(random2);
  }, []);

  //const { ref, ...navigationPanel } = useNavigationPanel(2);
  // const { setPage } = navigationPanel;

  const [ans1, setAns1] = useState([true, false, false, false]);
  const [ans2, setAns2] = useState([true, false, false, false]);
  const [ans3, setAns3] = useState([true, false, false, false]);
  const [ans4, setAns4] = useState([true, false, false, false]);
  const [ans5, setAns5] = useState([true, false, false, false]);
  const [finalAnswer, setFinalAnswer] = useState(0);


  return (
    <View style={{flex: 1}}>
      <AnimatedViewPager
        style={{flex: 1}}
        showPageIndicator={true}
        //  {...navigationPanel}
        ref={viepagerRef}
        initialPage={0}>
        <View key="1">
          <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.imageForQuiz}>
            <View style={{paddingTop: '30%'}} />
            <View style={styles.imageView}>
              <Image
                style={styles.imageDetails}
                source={arrayTemp[random1].src}
              />
            </View>

            {/* <View>
        <RadioGroup
                  options={radiogroup_options}
                  // onChange={(option) => setRadioSelected(option)}
            /> */}
            {/* </View> */}

            <View>
              {/* <RadioButton value="first" /> */}
              <View style={{marginBottom:'10%'}}/>

              <View style={{alignSelf:'center'}}>
              <TouchableOpacity
                onPress={() => {
                  const temp = [true, false, false, false];
                  setAns1(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans1[0]} />
                  <Text>{arrayTemp[random1].option1}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, true, false, false];
                  setAns1(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans1[1]} />
                  <Text>{arrayTemp[random1].option2}</Text>
                </View>
              </TouchableOpacity>
              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, true, false];
                  setAns1(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans1[2]} />
                  <Text>{arrayTemp[random1].option3}</Text>
                </View>
              </TouchableOpacity>
              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, false, true];
                  setAns1(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans1[3]} />
                  <Text>{arrayTemp[random1].option4}</Text>
                </View>
              </TouchableOpacity>

              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
            </View>
          </ImageBackground>
        </View>



        <View key="2">
          <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.imageForQuiz}>
            <View style={{paddingTop: '30%'}} />
            <View style={styles.imageView}>
              <Image
                style={styles.imageDetails}
                source={arrayTemp[random2].src}
              />
            </View>
            <View>
              {/* <RadioButton value="first" /> */}
              <View style={{marginBottom:'10%'}}/>

              <View style={{alignSelf:'center'}}>

              <TouchableOpacity
                onPress={() => {
                  const temp = [true, false, false, false];
                  setAns2(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans2[0]} />
                  <Text>{arrayTemp[random2].option1}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, true, false, false];
                  setAns2(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans2[1]} />
                  <Text>{arrayTemp[random2].option2}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, true, false];
                  setAns2(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans2[2]} />
                  <Text>{arrayTemp[random2].option3}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, false, true];
                  setAns2(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans2[3]} />
                  <Text>{arrayTemp[random2].option4}</Text>
                </View>
              </TouchableOpacity>
              </View>
              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
          </ImageBackground>
        </View>
        
        <View key="3">
          <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.imageForQuiz}>
            <View style={{paddingTop: '30%'}} />
            <View style={styles.imageView}>
              <Image
                style={styles.imageDetails}
                source={arrayTemp[random3].src}
              />
            </View>




            <View>
              {/* <RadioButton value="first" /> */}
              <View style={{marginBottom:'10%'}}/>

              <View style={{alignSelf:'center'}}>

              <TouchableOpacity
                onPress={() => {
                  const temp = [true, false, false, false];
                  setAns3(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans3[0]} />
                  <Text>{arrayTemp[random3].option1}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, true, false, false];
                  setAns3(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans3[1]} />
                  <Text>{arrayTemp[random3].option2}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, true, false];
                  setAns3(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans3[2]} />
                  <Text>{arrayTemp[random3].option3}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, false, true];
                  setAns3(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans3[3]} />
                  <Text>{arrayTemp[random3].option4}</Text>
                </View>
              </TouchableOpacity>

              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
            </View>

          </ImageBackground>
        </View>



        <View key="4" >
          <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.imageForQuiz}>
            <View style={{paddingTop: '30%'}} />
            <View style={styles.imageView}>
              <Image
                style={styles.imageDetails}
                source={arrayTemp[random4].src}
              />
            </View>
        
        
            <View>
              {/* <RadioButton value="first" /> */}
              <View style={{marginBottom:'10%'}}/>
              <View style={{alignSelf:'center'}}>

              <TouchableOpacity
                onPress={() => {
                  const temp = [true, false, false, false];
                  setAns4(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans4[0]} />
                  <Text>{arrayTemp[random4].option1}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, true, false, false];
                  setAns4(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans4[1]} />
                  <Text>{arrayTemp[random4].option2}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, true, false];
                  setAns4(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans4[2]} />
                  <Text>{arrayTemp[random4].option3}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, false, true];
                  setAns4(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans4[3]} />
                  <Text>{arrayTemp[random4].option4}</Text>
                </View>
              </TouchableOpacity>
              </View>

              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
  
        
        
        
          </ImageBackground>
        </View>
        
        <View key="5">
          <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.imageForQuiz}>
              <View style={{flex:1}}>
            <View style={{paddingTop: '30%'}} />
            <View style={styles.imageView}>
              <Image
                style={styles.imageDetails}
                source={arrayTemp[random5].src}
              />
            </View>



            <View>
              {/* <RadioButton value="first" /> */}
              <View style={{marginBottom:'10%'}}/>
              <View style={{alignSelf:'center'}}>
              <TouchableOpacity
                onPress={() => {
                  const temp = [true, false, false, false];
                  setAns5(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans5[0]} />
                  <Text>{arrayTemp[random5].option1}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />

              <TouchableOpacity
                onPress={() => {
                  const temp = [false, true, false, false];
                  setAns5(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans5[1]} />
                  <Text>{arrayTemp[random5].option2}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, true, false];
                  setAns5(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans5[2]} />
                  <Text>{arrayTemp[random5].option3}</Text>
                </View>
              </TouchableOpacity>

              <View style={{height:5}} />


              <TouchableOpacity
                onPress={() => {
                  const temp = [false, false, false, true];
                  setAns5(temp);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton checked={ans5[3]} />
                  <Text>{arrayTemp[random5].option4}</Text>
                </View>
              </TouchableOpacity>

              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
            </View>

             </View>      
            <View style={{marginBottom:'10%', alignItems:'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                var answer1 = ans1.indexOf(true);
                answer1++;
                var answer2 = ans2.indexOf(true);
                answer2++; 
                var answer3 = ans3.indexOf(true);
                answer3++;
                var answer4 = ans4.indexOf(true);
                answer4++;
                var answer5 = ans5.indexOf(true);
                answer5++;

                var answer1String = "option"+answer1;
                var answer2String = "option"+answer2;
                var answer3String = "option"+answer3;
                var answer4String = "option"+answer4;
                var answer5String = "option"+answer5;
                

                console.log(answer1String);
                console.log(arrayTemp[random1].ans);

                var answerSend = 0;


                if(arrayTemp[random1].ans == answer1String) {
                  console.log('1 answer is correct')
                  answerSend++;
                }
                if(arrayTemp[random2].ans == answer2String) {
                  answerSend++;
                }
                if(arrayTemp[random4].ans == answer4String) {
                  answerSend++;
                }
                if(arrayTemp[random3].ans == answer3String) {
                  answerSend++;
                }if(arrayTemp[random5].ans == answer5String) {
                  answerSend++;
                }


                navigation.navigate('AnswerScreen',{
                  answer: answerSend
                })

                console.log(answerSend)

              }}>
              <Text style={styles.text}>Submit Quiz</Text>
            </TouchableOpacity>

             </View>     

          </ImageBackground>
        </View>

         
      
      </AnimatedViewPager>
    </View>
  );
};

const AnswerScreen = ({navigation,route}) => {

  const[answer, setAnswer] = useState(route.params.answer);

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <ImageBackground source={require('./assets/background.jpg')}
        style={styles.image} >
      <View style={{alignSelf:'center', justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:20}}> Your score is : </Text>
      <Text style={{fontSize:100, }}>{answer}/5</Text>
      </View>

      <View style={{alignItems:'center', marginTop:'10%'}}> 
      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Quiz')}>
            <Text style={styles.text}>Play Again</Text>
          </TouchableOpacity>
          <View style={{height:10}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SelectScreen')}>
            <Text style={styles.text}>Quit</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

export default App;
