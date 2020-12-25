import React from 'react'
import { View, Text, TouchableOpacity,FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Appbar, Card, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import styles from './Styles'

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
    },{
        title:"FAST FOOD",
        iconName:"hamburger"
    },
    {
        title:"DESSERT",
        iconName:"cupcake"
    },
]

const CategoryScreen = (props) => {
    return (
            <View style={styles.container}>

            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
                <Appbar.Content title="All Categories" color={COLORS.red} titleStyle={{...FONTS.h2}}/>
            </Appbar.Header>

                <FlatList
                    data={categoryImages}
                    style={{paddingTop:SIZES.margin}} 
                    renderItem={( {item} ) => renderCategories(item,props)}
                    keyExtractor={(item, index) => index.toString()}    
                    showsHorizontalScrollIndicator={false} 
                /> 

            </View>
    )
}
const renderCategories = (item,props) => {
    return(
        <TouchableOpacity 
            style={styles.categoryList}
            onPress={() => props.navigation.navigate('Items',{category:item.title})}
        >
            <View style={styles.textContainer}>
                <Text style={{...FONTS.h3}}>{item.title}</Text>
                <Text style={{...FONTS.body4}}>item 1, item 2, item 3, etc</Text>
            </View>
            <MaterialCommunityIcons name={item.iconName} size={48} color={COLORS.red} />
        </TouchableOpacity>  
    )
}    

export default CategoryScreen
