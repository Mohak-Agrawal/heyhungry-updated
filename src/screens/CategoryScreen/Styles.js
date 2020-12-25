import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    backIcon:{
        position:'absolute',
        top:5,
        left:10,
    },
    headerText:{
        ...FONTS.h2,
        color:COLORS.white,
        alignSelf:'center',
        marginVertical:SIZES.margin
    },
    card:{
        borderTopLeftRadius:100,
        marginTop:SIZES.margin,
        padding:25,
       
    },
    categoryList:{
        width:'95%',
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:COLORS.white,
        marginVertical:5,
        padding:20,
        borderRadius:SIZES.radius,
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:COLORS.lightGray
    },
    textContainer:{
        flexDirection:'column'
    }
    
})