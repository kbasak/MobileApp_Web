import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import PrimaryButton from '../components/PrimaryButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MD2LightTheme } from 'react-native-paper';

const Claims = () => {
  const [claim, setClaim] = useState("");
  const [amount, setAmount] = useState("");
  const [addmissionDate, setAddmissionDate] = useState();
  const [dischargeDate, setDischargeDate] = useState();
  const [popupVisible, setpopupVisible] = useState(false);
  const [value, setValue] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isTextFocus, setIsTextFocus] = useState(false);
  const [isClaimFocus, setIsClaimFocus] = useState(false);
  const [isAddmissionFocus, setIsAddmissionFocus] = useState(false);
  const [isDischargeFocus, setIsDischargeFocus] = useState(false);
  const hideModal = () => {
    setpopupVisible(() => !popupVisible)
    clear();
  };
  const clear = () => {
    setClaim("");
    setAmount("");
    setValue(null);
  }
  const submit = () => {
    setpopupVisible(true);
  }
  const data = [
    { label: 'Cough', value: '1' },
    { label: 'Covid-19', value: '2' },
    { label: 'Delivery', value: '3' },
    { label: 'Hypertension', value: '4' },
    { label: 'Infectious Diseases', value: '5' },
    { label: 'IVF', value: '6' },
    { label: 'Yellow Fever', value: '7' },
    { label: 'Others', value: '8' },
  ];

  const renderLabel = () => {
    if (isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'orange' }]}>
          Treatment Name
        </Text>
      );
    }
    return null;
  };

  return (

    <KeyboardAvoidingView behavior='position' style={{ flex: 1, padding: 12 }}>

      <View style={styles.itemDesign}>
        <View style={styles.containerText}>
          <Text style={styles.textFormat}>Choose Treatment Name: </Text>
        </View>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, (isFocus) ? { borderColor: 'orange' } : { borderColor: 'grey',borderWidth:.5 }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Treatment Name' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
      </View>

      <View style={[styles.itemDesign, {flexDirection:'row', justifyContent:'space-between'}]}>

        <View style={{minWidth:'40%'}}>
          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Admission Date: </Text>
          </View>
          <TextInput placeholder='DD-MM-YYYY' value={addmissionDate}
            onChangeText={(text) => { setAddmissionDate(text) }}
            onFocus={() => setIsAddmissionFocus(true)}
            onBlur={() => setIsAddmissionFocus(false)}
            style={[styles.textInput, (isAddmissionFocus) ? { borderColor: 'orange', outline:'none' } : { borderColor: 'grey',borderWidth:.5 }]}
          />
        </View>
        <View style={{minWidth:'40%', marginRight:'6%'}}>
          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Discharge Date: </Text>
          </View>
          <TextInput placeholder='DD-MM-YYYY' value={dischargeDate}
            onChangeText={(text) => { setDischargeDate(text) }}
            onFocus={() => setIsDischargeFocus(true)}
            onBlur={() => setIsDischargeFocus(false)}
            style={[styles.textInput, (isDischargeFocus) ? { borderColor: 'orange', outline:'none' } : { borderColor: 'grey',borderWidth:.5 }]}
          />
        </View>
      </View>

      {/* <View style={styles.itemDesign}>

        <View style={styles.containerText}>
          <Text style={styles.textFormat}>Discharge Date: </Text>
        </View>
        <TextInput placeholder='DD-MM-YYYY' value={dischargeDate}
          onChangeText={(text) => { setDischargeDate(text) }}
          onFocus={() => setIsDischargeFocus(true)}
          onBlur={() => setIsDischargeFocus(false)}
          style={[styles.textInput, (isDischargeFocus) ? { borderColor: 'orange' } : { borderColor: 'grey' }]}
        />
      </View> */}

      <View style={styles.itemDesign}>

        <View style={styles.containerText}>
          <Text style={styles.textFormat}>Claim Details: </Text>
        </View>
        <TextInput placeholder='Enter Claim Details' value={claim}
          onChangeText={(text) => { setClaim(text) }}
          onFocus={() => setIsClaimFocus(true)}
          onBlur={() => setIsClaimFocus(false)}
          style={[styles.textInput, (isClaimFocus) ? { borderColor: 'orange',outline:'none' } : { borderColor: 'grey',borderWidth:.5 }]}
        />
      </View>


      <View style={styles.itemDesign}>
        <View style={styles.containerText}>
          <Text style={styles.textFormat}>Claim Amount: </Text>
        </View>

        <TextInput placeholder='Enter Claim Amount $' value={amount}
          onChangeText={(text) => { setAmount(text) }}
          onFocus={() => setIsTextFocus(true)}
          onBlur={() => setIsTextFocus(false)}
          keyboardType='number-pad'
          style={[styles.textInput, (isTextFocus) ? { borderColor: 'orange',outline:'none' } : { borderColor: 'grey',borderWidth:.5 }]}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={clear}>Clear</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={submit}>Submit</PrimaryButton>
        </View>
      </View>

      <View style={styles.centeredView}>

        <Modal
          animationType="slide"
          transparent={true}
          isVisible={popupVisible} >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MaterialCommunityIcons name="checkbox-multiple-marked-circle" size={125} color="#26c248" onPress={hideModal} style={{ marginBottom: 5, marginTop: 15 }} />
              <Text style={{
                fontSize: 22,
                paddingBottom: 10,
                fontFamily: 'serif',
              }}>
                <Text style={{ color: '#13b213', fontWeight: 'bold' }}>Congrats!</Text> You have Submitted Your Claim Successfully for <Text style={{ color: '#ff7300ff', fontWeight: 'bold' }}>${amount}</Text></Text>
              <PrimaryButton onPress={hideModal}>Okay</PrimaryButton>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderWidth: 2,
    paddingLeft: 10,
    padding: 5,
    marginLeft: 15,
    marginBottom: 5,
    minHeight: 40,
    fontSize: 18,
    maxWidth: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    outline:'none'
  },
  text: { height: 100, borderWidth: .5 },
  container: {
    backgroundColor: 'white',
    padding: 0,
    margin: 2,
    maxWidth: '98%',
    justifyContent: 'center',
    marginLeft: '1%',
    marginTop: 5,
    outline:'none'
  },
  dropdown: {
    minHeight: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: 5,
    marginBottom: 5,
    maxWidth: '90%'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    outline:'none',
    marginLeft:10
  },
  placeholderStyle: {
    fontSize: 16,
    outline:'none'
  },
  selectedTextStyle: {
    fontSize: 16,
    outline:'none'
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight:10
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderWidth:1,
    borderColor:'gray',
    outline:'none'
  },
  buttonsContainer: {
    flex:1,
    flexDirection: 'row',
    marginTop: 20,
    maxWidth:'100%',
    justifyContent:'center'
  },
  buttonContainer: {
    maxWidth:'10%',
    flex:1
  },
  containerText: {
    margin: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  textFormat: {
    fontSize: 18,
    fontWeight: "700",
    color: '#00006d',
    fontFamily: 'notoserif',
    marginLeft: 10
  },
  itemDesign: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 125,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    maxWidth: '30%',
    minHeight: '35%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default Claims;