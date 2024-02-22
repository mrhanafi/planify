import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const style = StyleSheet.create({
   
    outlined: {
        marginVertical:12,
        paddingVertical:13,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    text: {
        color: colors.grey,
        fontSize: 15,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 8,
        marginLeft: 8
    }

});

export default style;