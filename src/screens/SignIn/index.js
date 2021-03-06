import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors} from '../../utils/Colors';
import {getDataStorage, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onPressSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header title="Masuk" subTitle="Dapatkan produk terbaik untuk Anda" />
        <View style={styles.container}>
          <TextInput
            label="Email"
            placeholder="Masukkan Email Anda"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={17} />
          <TextInput
            label="Password"
            placeholder="Masukkan Password Anda"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={50} />
          <Button text="Masuk" onPress={onPressSubmit} />
          <Gap height={25} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textRegister}>Belum punya akun? Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  textRegister: {
    textAlign: 'center',
  },
});
