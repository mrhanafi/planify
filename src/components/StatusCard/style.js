import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const getStyle = (type) => StyleSheet.create({
    container: {
        backgroundColor: type === 'error' ? colors.lightred : colors.lightgrey,
        borderRadius: 15,
        padding: 12,
        marginRight: 8,
        marginTop: 30,
        width: '32%'
    },
    label: {
        marginBottom:13,
        fontSize: 10,
        color: type === 'error' ? colors.red : colors.blue
    },
    count: {
        fontSize: 28,
        fontWeight: '500',
        color: type === 'error' ? colors.red : colors.blue,
        marginBottom: 8,
    }
});

export default getStyle;