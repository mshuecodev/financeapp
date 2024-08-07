import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';

function LoginForm(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text>Form Login</Text>
    </ScrollView>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
