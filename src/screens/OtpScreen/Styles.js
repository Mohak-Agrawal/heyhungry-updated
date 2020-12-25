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
        alignItems:'center',
        padding:SIZES.padding
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    cellView:{
        paddingVertical:10,
        width:40,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1.5
    },
    bottomView:{
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