import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import { Card } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { Appbar } from 'react-native-paper';
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
    {
        title:"Rabdi",
        imageUri:"https://www.cubesnjuliennes.com/wp-content/uploads/2019/03/Rabdi-Recipe-500x500.jpg"
    },
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
    {
        title:"Rabdi",
        imageUri:"https://www.cubesnjuliennes.com/wp-content/uploads/2019/03/Rabdi-Recipe-500x500.jpg"
    },
]

const categoryImages = [
    {
        title:"MAIN COURSE",
        iconName:"silverware-fork-knife"
    },
    {
        title:"STARTERS",
        iconName:"noodles"
    },
    {
        title:"BEVERAGES",
        iconName:"coffee"
    },
    {
        title:"BREADS",
        iconName:"bread-slice"
    },
    {
        title:"FAST FOOD",
        iconName:"hamburger"
    },
    {
        title:"DESSERT",
        iconName:"cupcake"
    },
]


const ItemScreen = (props) => {
    console.log(props)

    const [selected,setSelected] = useState(props.route.params.category)

    return (
        <View style={styles.container}>

            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
                <Appbar.Content title={selected} color={COLORS.red} titleStyle={{...FONTS.h2}}/>
                <Appbar.Action icon="magnify" onPress={() => {}} color={COLORS.red} />
            </Appbar.Header>

            <FlatList
                data={categoryImages} 
                renderItem={( {item} ) => renderCategories(item,selected,setSelected)}
                keyExtractor={(item, index) => index.toString()}    
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            /> 

            <FlatList
                data={bestSellerFood} 
                renderItem={( {item} ) => renderItems(item)}
                keyExtractor={(item, index) => index.toString()}    
                showsVerticalScrollIndicator={false}
                style={{marginBottom:70}} 
            /> 

            
            <View style={styles.cartMenu}>
                <View>
                    <Text style={{...FONTS.body3,color:COLORS.red}}>Total <Text style={{...FONTS.h3}}>150.00</Text></Text>
                    <Text style={{...FONTS.body4,color:COLORS.red}}>2 items added to cart</Text>
                </View>
                <MaterialCommunityIcons name="shopping" size={24} color={COLORS.red} />
            </View>

        </View>
    )
}

const renderCategories = (item,selected,setSelected) => {
    
    return(
            <TouchableOpacity style={[styles.categoryMenu,{borderColor:item.title===selected?COLORS.red:COLORS.gray}]} onPress={() => setSelected(item.title)}>
                <Text style={{color:item.title===selected?COLORS.red:COLORS.gray,...FONTS.body4}}>{item.title}</Text>
            </TouchableOpacity>
    )
} 

const renderItems = (item) => {
    return(
        <Card style={styles.itemCard}>
            <View style={{flexDirection:'column'}}>

                <Image
                    source={{uri:item.imageUri}}
                    resizeMode="cover"
                    style={styles.itemImage}
                />

                <View style={styles.textContainer}>
                    <Text style={{...FONTS.h2}}>{item.title}</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                        <Text style={{...FONTS.h3}}>Rs 199</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialCommunityIcons name="minus" size={28} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{marginHorizontal:SIZES.margin,...FONTS.h2}}>01</Text>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialCommunityIcons name="plus" size={28} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </Card>  
    )
}  

export default ItemScreen
