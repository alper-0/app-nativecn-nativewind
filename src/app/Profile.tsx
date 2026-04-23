import { View, Image, ScrollView } from "react-native";
import { User } from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preferences } from "@/components/Preferences";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useToast } from "@/components/Toast";


export function Profile() {
    const { toast } = useToast();

    function handleSave() {
        toast("Profile updated successfully!", "success", 3000, "top", true);
    }

    return (
        <View className="flex-1 bg-gray-700">
            <Image
                source={require("@/assets/banner.png")}
                className="w-full h-52 -mb-16" />
            <ScrollView
                className="flex-1 px-4"
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
            >
                <User />
                <Skills />
                <Preferences />
                <Input
                    label="Company"
                    placeholder="Company"
                    labelClasses="text-white font-semibold mt-4 mb-1"
                    inputClasses="bg-gray-600 border-gray-500 text-white"
                    placeholderTextColor="#707070"
                />
                <Button
                    label="Save"
                    className="bg-green-500 w-full mt-6"
                    size="lg"
                    onPress={handleSave}
                />
            </ScrollView>
        </View>
    )
}
