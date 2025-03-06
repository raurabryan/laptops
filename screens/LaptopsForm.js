import { View,Text, StyleSheet,Alert } from "react-native"
import { Input,Button } from "@rneui/base";
import { useState } from "react";
import {saveLaptopsRest, updateLaptopsRest} from "../rest_client/laptops"

export const LaptopsFrom = ({navigation, route})=>{

    let laptopRetrived = route.params.laptopParam;
    let isNew = true;

    if (laptopRetrived != null) {
        isNew = false;
    }


    const [marca, setMarca]=useState(isNew ? null : laptopRetrived.marca);
    const [procesador, setProcesador]=useState(isNew ? null : laptopRetrived.procesador);
    const [memoria, setMemoria]=useState(isNew ? null : laptopRetrived.memoria);
    

    const showMessage=()=>{
        Alert.alert("CONFIRMACION", isNew ? "Se creo el registro de la laptop" : "Registro Laptop Actualizado");
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
     const updateLaptop = () => {
            console.log("actualizando laptop");
            updateLaptopsRest({
                id:laptopRetrived.id,
                marca: marca,
                procesador: procesador,
                memoria:memoria
    
    
            }, showMessage)
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
            onPress={isNew ?saveLaptop:updateLaptop}
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