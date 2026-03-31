import { View, Text } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export function User(){
    return(
        <View className="items-center">
            <Avatar className="w-32 h-32 border-4 border-gray-300">
                {/* <AvatarImage source={{uri:"https://github.com/fernandojsilvasenac.png"}}/> */}
                <AvatarImage source={require("@/assets/fernandojsilvasenac.png")}/>
                <AvatarFallback>FJS</AvatarFallback>
            </Avatar>
            <Text className="text-white font-bold text-2xl mt-4">
                Fernando J Silva
            </Text>
            <Text className="text-gray-400 text-lg">
                @fernandojsilvasenac
            </Text>
        </View>
    )
}