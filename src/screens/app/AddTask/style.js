import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
// import colors from "../../constants/colors";


const style = StyleSheet.create({
    container: {
        // flex:1
    },
    backContainer: {
        padding: 24,
    },
    backIcon: {
        width: 32,
        height: 32
    },
    label: {
        marginTop: 20,
        fontSize: 12,
        color: colors.black,
        marginHorizontal: 24,
        fontWeight: '500',
    },
    button: {
        margin: 24,
    }
});

export default style;