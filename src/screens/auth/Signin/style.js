import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.white,
    },
    footerText: {
        color: colors.grey,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 28,
    },
    footerLink: {
        color: colors.purple,
        fontWeight: 'bold',
    }
});

export default style;