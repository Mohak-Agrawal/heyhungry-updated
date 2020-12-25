import { StyleSheet } from 'react-native'
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    itemCard:{
        width:'95%',
        alignSelf:'center',
        borderRadius:SIZES.radius,
        marginVertical:SIZES.margin,
        elevation:0,
        borderWidth:1,
        borderColor:COLORS.lightGray
    },
    itemImage:{
        width:"100%",
        height:200,
        borderTopLeftRadius:SIZES.radius,
        borderTopRightRadius:SIZES.radius
    },  
    textContainer:{
        padding:10,
        flex:1,
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
    buttonContainer:{
        backgroundColor:COLORS.red,

        borderRadius:5
    },
    categoryMenu:{
        flexDirection:'column',
        padding:15,
        marginHorizontal:5,
        marginVertical:10,
        borderWidth:0.5,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:5
    },
    cartMenu:{
        width:'95%',
        height:60,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.radius,
        position:'absolute',
        bottom:10,
        left:'2.5%',
        right:'2.5%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        elevation:2,
        borderColor:COLORS.lightGray,
        borderWidth:0.5


    }
})