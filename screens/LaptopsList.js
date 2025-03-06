import { View, Text, StyleSheet, FlatList,TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptops"
import React, { useState } from 'react';

export const LaptopsList = ({navigation}) => {
    const [laptopsList, setLaptopsList] = useState([]);

    const LaptopsItem = ({ laptop }) => {
        return <TouchableHighlight onPress={()=>{
            navigation.navigate("ContactsFormNav",{laptopParam:laptop});
        }}>
            <ListItem>
            <ListItem.Content>
                <ListItem.Title>{laptop.marca}  {laptop.procesador}</ListItem.Title>
                <ListItem.Subtitle>{laptop.memoria}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        </TouchableHighlight>
        
    }

    const fnRefreshList = (laptops) => {
        setLaptopsList(laptops);
    }
    return <View>
        <Text>LISTA DE LAPTOPS</Text>
        <Button
            title="Consultar"
            onPress={() => {
                getAllLaptops(fnRefreshList);
            }}
        />
        <FlatList
            data={laptopsList}
            renderItem={({ item }) => {
                return <LaptopsItem laptop={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("ContactsFormNav",{}) }}
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