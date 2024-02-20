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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    agreeText: {
        color: colors.grey,
        fontSize: 12,
        marginLeft: 8,
    },
    link: {
        textDecorationLine: 'underline'
    }
});

export default style;