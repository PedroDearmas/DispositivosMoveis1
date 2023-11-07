import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Cachorro } from './model/Cachoroo';
import { useState } from 'react';

export default function App() {
  const [formCachorro, setformCachorro] =
  useState<Partial<Cachorro>>({})

  const instanciar =()=>{
    const cachorro = new Cachorro(formCachorro)
    cachorro.latir()
    alert('Cachorro Instanciado')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Cadastro de Animais</Text>

      <TextInput 
        style={styles.input}
        placeholder='Digite o ID'
        value={formCachorro.id?.toString()}
        onChangeText={
          (val)=>setformCachorro({...
            formCachorro,
            id: val})
        }
      >
      </TextInput>
      <TextInput 
        style={styles.input}
        placeholder='Digite o Nome'
        value={formCachorro.nome?.toString()}
        onChangeText={
          (val)=>setformCachorro({...
            formCachorro,
            nome: val})
        }
      >
      </TextInput>
      <TextInput 
        style={styles.input}
        placeholder='Digite a Raça'
        value={formCachorro.raca?.toString()}
        onChangeText={
          (val)=>setformCachorro({...
            formCachorro,
            raca: val})
        }
      >
      </TextInput>
      <TextInput 
        style={styles.input}
        placeholder='Digite a Data de Nascimento'
        value={formCachorro.dataNascimento?.toString()}
        onChangeText={
          (val)=>setformCachorro({...
            formCachorro,
            dataNascimento: val})
        }
      >
      </TextInput>
      
      <Button
        title='Instanciar Objeto'
        onPress={instanciar}
      ></Button>

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
  },
  input:{
    backgroundColor: '#d50000',
    paddingVertical:1,
    paddingHorizontal: 1,
    paddingLeft: 5,
    borderRadius: 8,
    marginTop:2,
    height: 40,
    minWidth: 300,
  },
  text:{
    color:'#d50000',

  }  

});
