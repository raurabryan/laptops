import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { LaptopsList } from "./screens/LaptopsList";
import { LaptopsFrom} from "./screens/LaptopsForm";

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <StackContacts.Navigator initialRouteName="ContactsListNav">
      <StackContacts.Screen name = "ContactsListNav"   
        component={LaptopsList}
      />
      <StackContacts.Screen name = "ContactsFormNav"   
              component={LaptopsFrom}
            />
    </StackContacts.Navigator>
   </NavigationContainer>
  );
}
