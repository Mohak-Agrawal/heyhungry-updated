import React from 'react'
import { View, Text ,FlatList, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Searchbar } from 'react-native-paper'
import { COLORS, FONTS,SIZES } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    },
]

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
]

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}> 

                <View style={{marginVertical:SIZES.margin}}>
                    <Text style={{...FONTS.h1}}>Hello,</Text>
                    <Text style={{...FONTS.h1}}>are you <Text style={{color:COLORS.red}}>hungry?</Text></Text>
                </View>
                
                <Searchbar iconColor={COLORS.red} placeholder="Search for dishes..." style={styles.textInput}/>

                <View style={styles.rowHeader}>
                    <Text style={{...FONTS.h2}}>Categories</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('products')}>
                        <Text style={{...FONTS.body3,color:COLORS.red}}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                    <FlatList
                        data={categoryImages} 
                        numColumns={3}
                        renderItem={( {item} ) => renderCategories(item)}
                        keyExtractor={(item, index) => index.toString()}    
                        showsVerticalScrollIndicator={false} 
                    /> 
                </View>

                <View style={styles.rowHeader}>
                    <Text style={{...FONTS.h2}}>Best Sellers</Text>
                    <TouchableOpacity>
                        <Text style={{...FONTS.body3,color:COLORS.red}}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:SIZES.margin}}>
                    <FlatList
                        data={bestSellerFood} 
                        horizontal={true}
                        renderItem={( {item} ) => renderBestSellerFoodImages(item)}
                        keyExtractor={(item, index) => index.toString()}    
                        showsHorizontalScrollIndicator={false} 
                    /> 
                </View>

                <View style={styles.rowHeader}>
                    <Text style={{...FONTS.h2}}>Hungry Offers</Text>
                    <TouchableOpacity>
                        <Text style={{...FONTS.body3,color:COLORS.red}}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:SIZES.margin}}>
                    <FlatList
                        data={bestSellerFood} 
                        horizontal={true}
                        renderItem={( {item} ) => renderBestSellerFoodImages(item)}
                        keyExtractor={(item, index) => index.toString()}    
                        showsHorizontalScrollIndicator={false} 
                    /> 
                </View>

            
            
            </ScrollView>
        </View>
    )   
}

const renderCategories = (item) => {
    return(
        <TouchableOpacity 
            style={styles.categoryIcon}
        >
            <MaterialCommunityIcons name={item.iconName} size={48} color={COLORS.red} />
            <Text style={styles.categoryBtnTxt}>{item.title}</Text>
        </TouchableOpacity>  
    )
}

const renderBestSellerFoodImages = (item) => {
    return(
        <Card 
            style={styles.foodImageCard}
        >
            <Image
                source={{uri:item.imageUri}}
                resizeMode="cover"
                style={styles.foodImage}
            />
            <Text style={styles.foodTitle}>{item.title}</Text>
            <Text style={styles.foodPrice}>Rs 199      <Text style={{color:COLORS.red}}>50%</Text></Text>
        </Card>  
    )
}


export default HomeScreen
