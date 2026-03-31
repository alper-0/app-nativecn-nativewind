// import { cn } from "@/lib/utils";
import { Text, TextProps } from "react-native";

// type TitleProps = TextProps & {
//     className?: string
// }

export function Title(props:TextProps){
    return(
        <Text className="text-white font-bold text-xl mt-6 mb-2"
        {...props}></Text>
    )
}

// export function Title({className, ...props}:TitleProps){
    //     return(
    //         <Text className={cn("text-white font-bold text-xl mt-6 mb-2", className)}
    //         {...props}></Text>
    //     )
    // }
