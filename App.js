import React from 'react';
import { View, Text, Button, StyleSheet, Image, StatusBar } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
const App = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#03041a" barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.headertxt}>PaymentGateway</Text>
      </View>
      <Image style={styles.img} source={require("./Images/pay.png")} />
      <View style={styles.btn}>
        <Button title='Pay' color="#f09d30" onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_roZtRz8Q6c8d2o', // Your api key
            amount: '5000',
            name: 'Dharmendra Kumar',
            prefill: {
              email: 'dhk7283013741@gmail.com',
              contact: '7761895776',
              name: 'Dhruv Gupta'
            },
            theme: { color: '#f5883b' }
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#03041a'
  },
  btn: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '40%',
    marginTop: 50,
    marginStart: 120
  },
  img: {
    width: '95%',
    height: '45%',
    marginStart: 20,
    marginTop: 30
  },
  header: {
    backgroundColor: '#f5883b',
    height: 50,
    justifyContent: 'center'
  },
  headertxt: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginStart: 20
  }
});
export default App;
