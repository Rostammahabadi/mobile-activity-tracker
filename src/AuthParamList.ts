import { StackNavigationProp } from "@react-navigation/stack"

export type AuthParamList = {
    Home: undefined;
    Activity: undefined;
    History: undefined;
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
}