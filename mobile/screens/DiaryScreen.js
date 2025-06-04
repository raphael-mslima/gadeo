import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function DiaryScreen() {
  const [text, setText] = React.useState('');

  const save = () => {
    // placeholder to send reflection to backend
    console.log(text);
  };

  return (
    <View>
      <TextInput multiline value={text} onChangeText={setText} />
      <Button title="Salvar" onPress={save} />
    </View>
  );
}
