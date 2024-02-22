import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const style = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 24,
    },
    thin: {
        fontWeight: '300',
        fontSize: 24,
        color: colors.purple,
        paddingHorizontal: 24,
    }
});

export default style;