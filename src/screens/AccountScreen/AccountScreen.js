import React from 'react'
import { View, Text ,Image} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'

const rowItems = [
    {
        icon:"food",
        title:"Hunger Zone"
    },
    {
        icon:"view-list",
        title:"My Orders"
    },
    {
        icon:"city",
        title:"My Addresses"
    },
    {
        icon:"cog",
        title:"Settings"
    },

]

const AccountScreen = () => {
    return (
        <View style={styles.container}>

            <View style={{flexDirection:'column',alignItems:'center',justifyContent:"center",marginTop:20}}>

                <Image source={{uri:"https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"}} resizeMode="cover" style={{width:100,height:100,borderRadius:50}}/>

                <View>
                    <Text style={{marginTop:10,...FONTS.h1,alignSelf:'center'}}>Mohak Agrawal</Text>
                    <Text style={{alignSelf:'center',...FONTS.body2}}>+91 8959210749</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',marginTop:2*SIZES.margin}}>
                <View style={{borderWidth:1,width:'50%',justifyContent:'center',alignItems:'center',padding:20,borderColor:"#F2F2F2"}}>
                    <Text style={{...FONTS.h2}}>₹140</Text>
                    <Text style={{...FONTS.body3}}>Wallet</Text>

                </View>
                <View style={{borderWidth:1,width:'50%',justifyContent:'center',alignItems:'center',padding:20,borderColor:"#F2F2F2"}}>
                    <Text style={{...FONTS.h2}}>12</Text>
                    <Text style={{...FONTS.body3}}>Orders</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                {rowItems.map((item) => (
                    <View style={styles.row} key={item.title}>
                        <MaterialCommunityIcons name={item.icon} size={36} color={COLORS.red}/>
                        <Text style={styles.rowTitle}>{item.title}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.row}>
                <MaterialCommunityIcons name="power" size={36} color={COLORS.red}/>
                <Text style={[styles.rowTitle,{color:COLORS.red}]}>Log out</Text>
            </View>
            

        </View>
    )
}

export default AccountScreen
