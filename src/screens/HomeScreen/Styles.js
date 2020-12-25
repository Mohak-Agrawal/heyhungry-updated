import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import theme from "../../constants/theme";

const { COLORS, SIZES, FONTS } = theme;

export default StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:COLORS.white
    },
    textInput:{
        width:'99%',
        alignSelf:'center',
        borderRadius:SIZES.radius,
        marginVertical:SIZES.margin,
        ...FONTS.body3,
        elevation:0,
        borderWidth:1,
        borderColor:COLORS.lightGray
    },
    rowHeader:{
        marginVertical:SIZES.margin,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
    },
    categoryContainer: {
        justifyContent:'center',
        width:'100%',
        marginVertical:SIZES.margin,
        alignItems:'center',
       
      },
      categoryIcon: {
        flex: 1,
        margin: 5,
        alignSelf: 'center',
        backgroundColor:COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:SIZES.radius,
        width: 95,
        height: 95,
        borderWidth:1,
        borderColor:COLORS.lightGray
      },
      categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: COLORS.black,
        ...FONTS.h4
      },
      categoryTitle:{
        alignSelf: 'center',
        ...FONTS.h2,
        marginVertical:10
    },
    foodImageCard:{
        elevation:0,
        height:160,
        width:140,
        margin:5,
        borderRadius:SIZES.radius,
        borderWidth:1,
        borderColor:COLORS.lightGray
       
    },
    foodImage:{
        height:'70%',
        width:'100%',
        borderTopLeftRadius:SIZES.radius,
        borderTopRightRadius:SIZES.radius
    },
    foodTitle:{
        ...FONTS.h4,
        color: COLORS.black,
        alignSelf:'center',
    },
    foodPrice:{
        ...FONTS.body4,
        color: COLORS.black,
        alignSelf:'center',
    }
})