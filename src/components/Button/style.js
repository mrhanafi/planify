import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const style = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        // flex: 1,
        // width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 13,
        marginVertical: 8
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    blueBg: {
        backgroundColor: colors.blue,
    }
});

export default style;