import { StyleSheet } from 'react-native'
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    containerAvoidingView:{
        flex:1,
        padding:SIZES.padding,
        alignItems:'center'
    },
    textTitle:{
        marginVertical:50,
        ...FONTS.body3,
        textAlign:"center"
    },
    inputContainer:{
        paddingHorizontal:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1.5,
        borderBottomColor:COLORS.red
    },
    openDialogView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
    },
    input:{
        marginLeft:5,
        marginTop:2,
        flex:1,
        ...FONTS.body2,
    },
    viewBottom:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        width:'100%',
    },
    button:{
        width:'100%',
        padding:SIZES.padding,
        backgroundColor:COLORS.red,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:SIZES.radius,
    }
})