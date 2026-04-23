import { useState } from 'react';
import { Switch as RNSwitch } from 'react-native';

import { colors } from '@/styles/colors';

interface SwitchProps {
  defaultValue?: boolean;
}

function Switch({ defaultValue = false }: SwitchProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <RNSwitch
      value={value}
      onValueChange={setValue}
      trackColor={{ false: colors.gray[500], true: colors.green[500] }}
      thumbColor={colors.white}
    />
  );
}

export { Switch };
