import React, { useState } from 'react'
import { View, Text, FlatList, Image ,TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { COLORS, FONTS, SIZES  } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'

const bestSellerFood = [
    {
        title:"Biryani",
        imageUri:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Chicken-Biryani-3.jpg"
    },
    {
        title:"Butter Chicken",
        imageUri:"https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800"
    },
    {
        title:"Kadhai Paneer",
        imageUri:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Kadai-Paneer-1-3-500x500.jpg"
    },
    
]

const CartScreen = (props) => {

    const [promoCode,setPromoCode] = useState();
    const [discount,setDiscount] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.itemContainer}>
                <FlatList
                    data={bestSellerFood} 
                    renderItem={( {item} ) => renderItems(item)}
                    keyExtractor={(item, index) => index.toString()}    
                    showsVerticalScrollIndicator={false} 
                />
            </View>
            <View style={styles.bottomCard}>
                <View style={styles.notesContainer}>
                    <Text style={{...FONTS.h3,marginBottom:10}}>Special request to kitchen</Text>
                    <TextInput style={styles.notesInput} placeholder="Add your notes here..."/>
                </View>
                <View style={{width:'100%',borderWidth:0.5,borderColor:COLORS.lightGray,marginVertical:5}}/>
                <View style={styles.promoContainer}>
                    <TextInput 
                        style={styles.promoInput} 
                        placeholder="Promo Code" 
                        value={promoCode}
                        multiline={true} 
                        onChangeText={(value) => setPromoCode(value)}
                    />
                    <TouchableOpacity onPress={() => {setDiscount(10)}}>
                        <Text style={styles.promoButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',borderWidth:0.5,borderColor:COLORS.lightGray,marginVertical:5}}/>
                <View style={styles.priceRow}>
                    <Text style={{...FONTS.body3}}>Item Total</Text>
                    <Text style={{...FONTS.body3}}>₹ 199</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={{...FONTS.body3}}>Delivery</Text>
                    <Text style={{...FONTS.body3}}>₹ 39</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={{...FONTS.body3,color:'green'}}>Promo Discount</Text>
                    <Text style={{...FONTS.body3,color:'green'}}>- ₹ {discount}</Text>
                </View>
                <View style={{width:'100%',borderWidth:0.5,borderColor:COLORS.lightGray,marginVertical:5}}/>
                <View style={styles.priceRow}>
                    <Text style={{...FONTS.h2}}>Grand Total</Text>
                    <Text style={{...FONTS.h2}}>₹ 256</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => {props.navigation.navigate("cart")}}>
                    <Text style={{...FONTS.h2,color:COLORS.white}}>PROCEED TO CHECKOUT</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

const renderItems = (item) => {
    return(
        <Card style={styles.itemCard}>
            <View style={{flexDirection:'row'}}>

                <Image
                    source={{uri:item.imageUri}}
                    resizeMode="cover"
                    style={styles.itemImage}
                />

                <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'space-between',paddingHorizontal:SIZES.padding/2}}>

                    <View style={styles.textContainer}>
                        <Text style={{...FONTS.h2}}>{item.title}</Text>
                        <Text style={{...FONTS.h3}}>Rs 199</Text>
                        <Text style={{...FONTS.body4}}>MAIN COURSE</Text>
                        
                    </View>

                    <View style={{flexDirection:'column',justifyContent:'space-between'}}>

                        <View style={{flexDirection:'column',alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialCommunityIcons name="plus" size={18} color={COLORS.white} />
                            </TouchableOpacity>
                            <View style={[styles.buttonContainer,{marginHorizontal:SIZES.margin/2,backgroundColor:COLORS.white}]}>
                                <Text style={{...FONTS.h3}}>01</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialCommunityIcons name="minus" size={18} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                             
                    </View>

                </View>

            </View>
        </Card>  
    )
}

export default CartScreen
