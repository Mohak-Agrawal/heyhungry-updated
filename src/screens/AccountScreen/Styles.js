import { StyleSheet } from 'react-native'
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    rowContainer:{
        paddingVertical:SIZES.padding,
        borderBottomWidth:2,
        borderColor:"#F2F2F2",
    },
    row:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:5,
    },
    rowTitle:{
        ...FONTS.h3,
        marginLeft:2*SIZES.margin
    },
    
})