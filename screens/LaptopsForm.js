import { View,Text, StyleSheet,Alert } from "react-native"
import { Input,Button } from "@rneui/base";
import { useState } from "react";
import {saveLaptopsRest} from "../rest_client/laptops"

export const LaptopsFrom = ({navigation})=>{

    const [marca, setMarca]=useState();
    const [procesador, setProcesador]=useState();
    const [memoria, setMemoria]=useState();
    

    const showMessage=()=>{
        Alert.alert("CONFIRMACION","Se creo el registro de la Laptop");
    }
    const saveLaptop=()=>{
        console.log("saveLaptopsRest");
        navigation.goBack();
        saveLaptopsRest(
            {
                marca: marca,
                procesador: procesador,
                memoria:memoria
            },
            showMessage
        );
    }


    return <View style={styles.container}>
        <Text>FORMULARIO DE REGISTRO LAPTOPS</Text>
        <Input 
            value={marca}
            placeholder="MARCA"
            onChangeText={(value)=>{
                setMarca(value);
            }}
        />
        <Input 
            value={procesador}
            placeholder="PROCESADOR"
            onChangeText={(value)=>{
                setProcesador(value);
            }}
        />
        <Input 
            value={memoria}
            placeholder="MEMORIA"
            onChangeText={(value)=>{
                setMemoria(value);
            }}
        />
        <Button 
            title="GUARDAR"
            onPress={saveLaptop}
        />
    </View>
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });