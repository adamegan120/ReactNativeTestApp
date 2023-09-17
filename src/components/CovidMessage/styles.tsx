import {StyleSheet} from 'react-native';
// Define your styles using the StyleSheet.create() method
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor: '#2b80ff',
  },
  title:{
     color:'#bed9ff',
     fontSize:20,
     fontWeight:'bold',
     marginBottom:10,
  },
  learnMore:{
    color:'white',
    fontWeight:'bold',
    fontSize:15
  },
  text: {
    color:'white',
    fontSize:10,
    marginBottom:10,
  },
});

// Export the styles object
export default styles;
