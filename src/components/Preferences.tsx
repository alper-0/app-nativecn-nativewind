import { Text, TextProps } from "react-native";


export function Preferences(props:TextProps){
    return(
        <Text className="text-white font-bold text-xl mt-6 mb-2"
        {...props}>Preferences</Text>
    )
}