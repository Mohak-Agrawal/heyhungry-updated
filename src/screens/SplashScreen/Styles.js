import { StyleSheet } from 'react-native'
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center'
    },
})