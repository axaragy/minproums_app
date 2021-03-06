import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap, List} from '../../components';
import {API_HOST} from '../../config';
import {Colors, Fonts, getDataStorage} from '../../utils';

const Profile = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  useEffect(() => {
    getDataStorage('userProfile').then((res) => {
      if (res) {
        console.log('res: ', res);
        setPhoto(`${API_HOST.base_url}/${res.profile_photo_path}`);
      }
    });
  }, []);

  const onPressSignOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <ScrollView style={styles.container}>
          <View style={styles.photo}>
            {/* <TouchableOpacity style={styles.borderPhoto}>
              <View style={styles.photoWrapper}>
                <Text style={styles.txtAddPhoto}>Add Foto</Text>
              </View>
            </TouchableOpacity> */}
            {console.log(photo)}
            {/* <Image source={{uri: photo}} style={styles.borderPhoto} /> */}
            <Gap height={20} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@mail.com</Text>
          </View>
          <View style={styles.content}>
            <Gap height={10} />
            <List type="list-profile" name="Edit Profile" />
            <List type="list-profile" name="Bahasa" />
            <List type="list-profile" name="Beri Rating & Ulasan" />
            <List type="list-profile" name="Kontak Bantuan" />
            <List type="list-profile" name="Keluar" onPress={onPressSignOut} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    // marginTop: 24,
    flex: 1,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    // borderWidth: 1,
    // borderColor: Colors.greyLight2,
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoWrapper: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: Colors.greyLight,
    padding: 24,
  },
  txtAddPhoto: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
    textAlign: 'center',
  },
});
