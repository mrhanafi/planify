import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },  
    image: {
        width: '100%',
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 30,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
    },
    content: {
        padding: 46,
        
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    subtitle: {
        color: colors.grey,
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 16
    }
});

export default style;