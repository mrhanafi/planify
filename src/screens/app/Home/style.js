import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
// import colors from "../../constants/colors";


const style = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor: colors.purple,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
    },
    titleContainer: {
        backgroundColor: colors.lightgrey,
        borderRadius: 15,
        padding: 22,
        marginHorizontal: 24,
        marginVertical: 72
    },
    title: {
        color: colors.purple,
        fontSize: 16,
        
    },
    subtitle: {
        color: 'rgba(64,53,114,0.5)',
        fontSize: 16,
        marginTop:8,

    }
});

export default style;