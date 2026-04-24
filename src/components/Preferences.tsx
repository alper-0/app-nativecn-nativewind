import { Text, TextProps } from "react-native";
import { View } from "react-native";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

export function Preferences(props: TextProps) {
  return (
    <View>
      <Text className="text-white font-bold text-xl mt-6 mb-2" {...props}>
        Preferences
      </Text>
      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark mode</Option.Title>
        <Option.Control>
          <Switch defaultValue={true} />
        </Option.Control>
      </Option>
      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Option.Control>
          <Checkbox />
        </Option.Control>
      </Option>
    </View>
  );
}
