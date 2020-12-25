import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
        padding:SIZES.padding,
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        width:'100%',
        padding:20,
        borderWidth:1,
        borderColor:COLORS.lightGray,
        flexDirection:'column',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    Button:{
        backgroundColor:COLORS.red,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
        width:"100%",
        padding:15,
        borderRadius:SIZES.radius
    },
})