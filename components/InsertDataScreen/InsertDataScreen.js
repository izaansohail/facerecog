import * as React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
    Button,
    Image,
} from 'react-native';

import { styles } from '../styles/styles';
import ImagePicker from 'react-native-image-picker';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';

export function InsertDataScreen({ navigation }) {
    
    var [fileUri, SetFileuri] = React.useState();
    const [InsertData, setInsertData] = React.useState({
        ID: '',
        Name: '',
        Age: '',
        CNIC: '',
        Address: '',
        Phone_Number: '',
        Gender: '',
        Carreg: '',
        email: '',
        image1: '',
        image2: '',
        image3: '',
    });

    IDChange = (val) => {
        setInsertData({
            ...InsertData,
            ID: val,
        });
    };

    NameChange = (val) => {
        setInsertData({
            ...InsertData,
            Name: val,
        });
    };
    AgeChange = (val) => {
        setInsertData({
            ...InsertData,
            Age: val,
        });
    };
    CNICChange = (val) => {
        setInsertData({
            ...InsertData,
            CNIC: val,
        });
    };
    PhNoChange = (val) => {
        setInsertData({
            ...InsertData,
            CNIC: val,
        });
    };
    AddressChange = (val) => {
        setInsertData({
            ...InsertData,
            Address: val,
        });
    };
    GenderChange = (val) => {
        setInsertData({
            ...InsertData,
            Gender: val,
        });
    };
    CarregChange = (val) => {
        setInsertData({
            ...InsertData,
            Carreg: val,
        });
    };
    EmailChange = (val) => {
        setInsertData({
            ...InsertData,
            Email: val,
        });
    };

    insertAllHandle = (Name, Age, cnic, PhNo, Addr, Gen, Carreg, Email) => {
        console.log("a")
        axios.post("http://"+SERVER_IP+":5000/citizen", {
            "name": Name,
            "age": Age,
            "cnic": cnic,
            "address": Addr,
            "phonenumber": PhNo,
            "gender": Gen,
            "carreg": Carreg,
            "email": Email,
            "image1_name": fileUri,
            "image2_name": "fdfjhdsjkfldsh",
            "image3_name": "ifjhsdjklfhdfjkfhdf"
        }).then(res => {
            alert("successfully inserted");
        }).catch(err => {
            console.log(err);
            alert("error bois" + err);
        });
    };

    const chooseImage = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                //SetFileuri(response.uri) //update state to update Image
                SetFileuri({ fileUri: response.uri });
            }
        });
    };

    return ( 
    <ScrollView>
        <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "ID..."
        placeholderTextColor = "#003f5c"
        value={InsertData.ID}
        onChangeText = {
            (val) => IDChange(val)
        }/>  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Name}
        onChangeText = {
            (val) => NameChange(val)
        }

        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Age}
        onChangeText = {
            (val) => AgeChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "#003f5c"
        value={InsertData.CNIC}
        onChangeText = {
            (val) => CNICChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Address}
        onChangeText = {
            (val) => AddressChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Phone_Number}
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Gender}
        onChangeText = {
            (val) => GenderChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Carreg}
        onChangeText = {
            (val) => CarregChange(val)
        }
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "#003f5c"
        value={InsertData.email}
        onChangeText = {
            (val) => EmailChange(val)
        }
        />
        </View>

        <View style={{ alignSelf: 'center', marginTop: 10}}>
            <Image
              style={{ height: 70, width: 0, borderRadius: 0, }}
              source={{fileUri }} 
            />
            <TouchableOpacity style={styles.addPictureIcon} onPress={chooseImage}>
            <Icon name="camera" size={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginBtn} 
            onPress={() => {insertAllHandle(
              InsertData.ID,
              InsertData.Name,
              InsertData.Name,
              InsertData.Age,
              InsertData.CNIC,
              InsertData.Address,
              InsertData.Phone_Number,
              InsertData.Gender,
              InsertData.Carreg,
              InsertData.Email
              )}}
              >
            <Text style={styles.loginText}>INSERT</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
}