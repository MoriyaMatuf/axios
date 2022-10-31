import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
export default function App() {
  const [list,setList]=useState([]);
  const [img,setimg]=useState('https://th.bing.com/th/id/OIP.WIEA06hqOg8vVyC6KRWwDwHaFj?pid=ImgDet&rs=1');
  const [img2,setimg2]=useState('https://i.pinimg.com/originals/c5/16/c7/c516c721e9db29ad6dfabcf90839c0b7.jpg');

  const url='https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=LONDON&aqi=no%22';
  return (
    <View style={styles.container}>
     <View >
     <Button title='show img' onPress={()=>{
   axios.get(url)
   .then((respons)=>{
    // setList(respons.data);
    for (let [key, value] of Object.entries(respons.data)) {
      console.log(`${value}`);
      for (let [kk, vv] of Object.entries(value)){
        console.log(`${vv.Prototype}`);
        setList([...list,`${kk}`])
        console.log(list);
      }

      }

   })
   .catch((error)=>{alert('error',error.respons);})
   }}> </Button>
   </View>
 
{
 list.map((x)=>{
 return <Text>{x}</Text>
 })
} 
<View style={styles.img}>
<Image  source={img}/></View>
  <View><Button title='change img' onPress={()=>{setimg(img2)}}  />
     </View>
     <View><Button title='change img' onPress={()=>{setimg(img)}}  />
     </View>
           <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },img:{
    height:10,
    borderRadius:5,
    backgroundColor:"black",
with:50
  }
});
