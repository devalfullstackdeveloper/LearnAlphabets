/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Component,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Alphabets" component={Alphabets} options={{ headerShown: false }} />
        <Stack.Screen name="A" component={AlphabetDetails1} options={{ headerShown: false }} />
        <Stack.Screen name="B" component={AlphabetDetails2} options={{ headerShown: false }} />
        <Stack.Screen name="C" component={AlphabetDetails3} options={{ headerShown: false }} />
        <Stack.Screen name="D" component={AlphabetDetails4} options={{ headerShown: false }} />
        <Stack.Screen name="E" component={AlphabetDetails5} options={{ headerShown: false }} />
        <Stack.Screen name="F" component={AlphabetDetails6} options={{ headerShown: false }} />
        <Stack.Screen name="G" component={AlphabetDetails7} options={{ headerShown: false }} />
        <Stack.Screen name="H" component={AlphabetDetails8} options={{ headerShown: false }} />
        <Stack.Screen name="I" component={AlphabetDetails9} options={{ headerShown: false }} />
        <Stack.Screen name="J" component={AlphabetDetails10} options={{ headerShown: false }} />
        <Stack.Screen name="K" component={AlphabetDetails11} options={{ headerShown: false }} />
        <Stack.Screen name="L" component={AlphabetDetails12} options={{ headerShown: false }} />
        <Stack.Screen name="M" component={AlphabetDetails13} options={{ headerShown: false }} />
        <Stack.Screen name="N" component={AlphabetDetails14} options={{ headerShown: false }} />
        <Stack.Screen name="O" component={AlphabetDetails15} options={{ headerShown: false }} />
        <Stack.Screen name="P" component={AlphabetDetails16} options={{ headerShown: false }} />
        <Stack.Screen name="Q" component={AlphabetDetails17} options={{ headerShown: false }} />
        <Stack.Screen name="R" component={AlphabetDetails18} options={{ headerShown: false }} />
        <Stack.Screen name="S" component={AlphabetDetails19} options={{ headerShown: false }} />
        <Stack.Screen name="T" component={AlphabetDetails20} options={{ headerShown: false }} />
        <Stack.Screen name="U" component={AlphabetDetails21} options={{ headerShown: false }} />
        <Stack.Screen name="V" component={AlphabetDetails22} options={{ headerShown: false }} />
        <Stack.Screen name="W" component={AlphabetDetails23} options={{ headerShown: false }} />
        <Stack.Screen name="X" component={AlphabetDetails24} options={{ headerShown: false }} />
        <Stack.Screen name="Y" component={AlphabetDetails25} options={{ headerShown: false }} />
        <Stack.Screen name="Z" component={AlphabetDetails26} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
        <View>
          <Image source={require('./assets/welcome.jpg')} style={{ height: '70%', width: '100%' }} ></Image>
        </View>
        <View style={styles.playButtonView}>
          <TouchableOpacity style={styles.button}
            onPress={() =>
              navigation.navigate('Alphabets')
            }
          >
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  detailsView: {
    flexDirection: "column",
    // marginTop: '20%'
  },
  playButtonView: {
    alignItems: 'center'
  },
  button: {
    width: '40%',
    alignItems: "center",
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    // fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
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
    width: 50
  },
  mainView: {
    height:'100%',
    width:'100%',
    // marginTop: 100,
    flex:1,
  },
  imageView:{
    alignSelf: 'center'
  },
  textView: {
    marginLeft:16,
    marginRight: 16,
  },
  textStyle:{
    marginTop: 32,
    fontSize:20,
    alignSelf: 'center',
    textAlign:'center'
  },
  imageDetails: {
    height: 200,
    width: 200
  }

});



const Alphabets = ({navigation}) => {

  const [dataSource, setDataSource] = useState([]);

 
 
  var arr = 1;

  const arrayTemp = [
    {id:1,
     src: require('./assets/icons/1.png'),
     character: 'A'
    },
    {id:2,
      src: require('./assets/icons/2.png'),
      character: 'B'
     },
    {id:3,
      src: require('./assets/icons/3.png'),
      character: 'C'
     },
    {id:4,
      src: require('./assets/icons/4.png'),
      character: 'D'

     },
    {id:5,
      src: require('./assets/icons/5.png'),
      character: 'E'

     },
    {id:6,
      src: require('./assets/icons/6.png'),
      character: 'F'

     },
    {id:7,
      src: require('./assets/icons/7.png'),
      character: 'G'

     },
     {id:8,
      src: require('./assets/icons/8.png'),
      character: 'H'

     },
     {id:9,
      src: require('./assets/icons/9.png'),
      character: 'I'

     },
     {id:10,
      src: require('./assets/icons/10.png'),
      character: 'J'

     },
     {id:11,
      src: require('./assets/icons/11.png'),      
      character: 'K'
     },
     {id:12,
      src: require('./assets/icons/12.png'),
      character: 'L'

     },
     {id:13,
      src: require('./assets/icons/13.png'),
      character: 'M'

     },
     {id:14,
      src: require('./assets/icons/14.png'),
      character: 'N'

     },
     {id:15,
      src: require('./assets/icons/15.png'),
      character: 'O'

     },
     {id:16,
      src: require('./assets/icons/16.png'),
      character: 'P'

     },
     {id:17,
      src: require('./assets/icons/17.png'),
      character: 'Q'

     },
     {id:18,
      src: require('./assets/icons/18.png'),
      character: 'R'

     },
     {id:19,
      src: require('./assets/icons/19.png'),
      character: 'S'

     },
     {id:20,
      src: require('./assets/icons/20.png'),
      character: 'T'

     },
     {id:21,
      src: require('./assets/icons/21.png'),
      character: 'U'

     },
     {id:22,
      src: require('./assets/icons/22.png'),
      character: 'V'

     },
     {id:23,
      src: require('./assets/icons/23.png'),
      character: 'W'

     },
     {id:24,
      src: require('./assets/icons/24.png'),
      character: 'X'

     },
     {id:25,
      src: require('./assets/icons/25.png'),
      character: 'Y'

     },
     {id:26,
      src: require('./assets/icons/26.png'),
      character: 'Z'
     },
     {
      id:27,
      src: ''
     }
  ];

  useState(() => {
    let items = Array.apply(null, Array(26)).map((v, i) => {
      var source = './assets/icons/'+1+'.png';
      var source1 = './assets/icons/'+(i+1)+'.png';
      arr++;
      console.log(i);
      return { id: i, src: require(source) };
    });

    setDataSource(items);
  }, []);

  return (
    <View style={{flex: 1,}}> 
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.detailsView}>
      <View style={{marginLeft:16, marginRight:16, marginBottom:20, alignItems:'center'}}> 
        <Text style={{fontSize:30}} >Select an Alphabet</Text>
      </View>
    <FlatList
      data={arrayTemp}
      renderItem={({ item }) => {
        var page = item.id;

        // var path =''+item.src.trim();
        // console.log(item.src)

        return (
          item.id <= 26 ? <View style={{ flex: 1, flexDirection: 'column', margin: 1, alignItems: 'center' }}>
           <TouchableOpacity  onPress={() =>
              navigation.navigate(item.character)

            }  
            >
            <Image style={styles.imageThumbnail} source={item.src} />
            {/* {console.log(item.id+1)} */}
         
          </TouchableOpacity>
          </View>
          : <View style={{ flex: 1, flexDirection: 'column', margin: 1, alignItems: 'center' }}/>
        )
      }}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index}
    />
    </View>
    </ImageBackground>
    </View>
  );

}


const AlphabetDetails1 = () => {
  return(
    <View style={styles.mainView} >
      <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
      <View style={styles.imageView}>
        <Image style={styles.imageDetails} source={ require('./assets/icons/apple.png') } />     
      </View>
      <View style={styles.textView }>
        <Text style={styles.textStyle}>A or a is the first letter and the first vowel letter of the English. There are various words starting with A like Apple(image), Ant, Aunt.</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const AlphabetDetails2 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/ball.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>B or b is the second letter of the English. There are various words starting with B like Ball(image), Banana, Bear.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails3 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/cat.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>C or c is the third letter of the English.  There are various words starting with C like Cat(image), Car, Carrot.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails4 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/dog.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}> D or d is the fourth letter of the English. There are various words starting with D like Dog(image), Dad, Deer.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails5 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/elephant.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}> E or e is the fifth letter and the second vowel letter of the English. There are various words starting with E like Elephant(image), Ear, Eyes.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails6 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/Fish.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}> F or f is the sixth letter of the English. There are various words starting with F like Fish(image), Flower, Frog.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails7 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/grapes.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}> G or g is the seventh letter of the English. There are various words starting with G like Goat(image), Grapes, Ginger.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails8 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/horse.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}> H or h is the eighth letter of the English. There are various words starting with H like Horse(image), House, Horn.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails9 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/icecream.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>I or i is the ninth letter and the third vowel letter of the English. There are various words starting with I like Ice-Cream(image), Iron, Ice.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails10 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/jar.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>J or j is the tenth letter of the English. There are various words starting with J like Jar(image), Jug, Jam.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails11 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/key.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>K or k is the eleventh letter of the English. There are various words starting with K like Keys(image), Kite, King.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails12 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/lion.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>L is the twelfth letter of the English. There are various words starting with L like Lion(image), Legs, Lunch.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails13 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/mat.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>M or m is the thirteenth letter  of the English. There are various words starting with M like Mat(image), Mouse, Milk.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails14 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/nest.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>N or n is the fourteenth letter of the English. There are various words starting with N like Nest(image), Nail, Net.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails15 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/owl.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>O or o is the fifteenth letter and fourth vowel letter of the English. There are various words starting with O like Owl(image), Octopus, Onion.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails16 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/parrot.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>P or p is the sixteenth letter letter of the English. There are various words starting with P like Parrot(image), Peacock, Pen.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails17 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/queen.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>Q or q is the 17th letter letter of the English. There are various words starting with Q like Queen(image), Quizz, Quest.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails18 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/rat.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>R or r is the 18th letter of the English. There are various words starting with R like Rat(image), Race, Rice.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails19 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/sun.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>S or s is the 19th letter of the English. There are various words starting with S like Rat(image), Race, Rice.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails20 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/table.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>T or t is the 20th letter of the English. There are various words starting with T like Table(image), Tap, Teacher.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails21 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/umbrealla.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>U or u is the 21st letter and fifth vowel letter of the English. There are various words starting with U like Umbrella(image), Uniform, Unicorn.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails22 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/vase.png') } />     
    </View>
    <View style={styles.textView }>
    <Text style={styles.textStyle}>V or v is the 22nd and fifth-to-last letter of the English. There are various words starting with V like Vase(image), Van, Vegetable.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails23 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/watermelon.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>W or w is the 23rd and fourth-to-last letter of the English. There are various words starting with W like Watermelon(image), Whale, White.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}
const AlphabetDetails24 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/xmas.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>X or x is the 24th and third-to-last letter of the English. There are various words starting with X like Xylophone (image), Xmas Tree, X-ray.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails25 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/yolk.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>Y or y is the 25th and penultimate letter of the English. There are various words starting with X like Xylophone (image), Xmas Tree, X-ray.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

const AlphabetDetails26 = () => {
  return(
    <View style={styles.mainView} >
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    <View style={styles.imageView}>
      <Image style={styles.imageDetails} source={ require('./assets/icons/zebra.png') } />     
    </View>
    <View style={styles.textView }>
      <Text style={styles.textStyle}>Z or z is the 26th and final letter of the English. There are various words starting with Y like Zebra(image), zero, Zero.</Text>
    </View>
    </ImageBackground>
  </View>
  );
}

export default App;
