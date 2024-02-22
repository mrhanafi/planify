import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const style = StyleSheet.create({
    input: {
        backgroundColor: colors.lightgrey,
        paddingHorizontal: 24,
        paddingVertical:13,
        borderRadius: 10,
        color: colors.black,
        marginVertical: 12,
        fontSize: 15,
    },
    outlined: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: 24,
    }
});

export default style;