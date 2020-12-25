import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    pageIndicator:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    addressContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.padding,
    },
    addButton:{
        width:'100%',
        padding:10,
        borderWidth:2,
        flexDirection:'row',
        borderColor:COLORS.lightGray,
        marginVertical:SIZES.margin,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    addressCard:{
        width:'100%',
        padding:10,
        borderWidth:2,
        flexDirection:'row',
        borderColor:COLORS.lightGray,
        marginVertical:SIZES.margin,
        borderRadius:5
    },
    footer:{
        width:'100%',
        padding:20,
        borderWidth:1,
        borderColor:COLORS.lightGray,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    Button:{
        backgroundColor:COLORS.red,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:15,
        borderRadius:SIZES.radius
    }
})