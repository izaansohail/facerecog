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

export function InsertDataScreen({ navigation }) {
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

    insertAllHandle = (Id, Name, Age, cnic, PhNo, Addr, Gen, Carreg, Email) => {
        Alert.alert(Id + Name + Age + cnic + PhNo + Addr + Gen + Carreg + Email);
    };

    var [fileUri, SetFileuri] = React.useState();

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
                //const source = { uri: response.uri };

                //this.setState({ avatarSource: source, });
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
        onChangeText = {
            (val) => IDChange(val)
        }/>  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => NameChange(val)
        }

        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => AgeChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => CNICChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => AddressChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => GenderChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => CarregChange(val)
        }
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "#003f5c"
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