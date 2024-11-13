import { FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBike } from "../redux/bikesSlice";
import { Stack, Text } from "rn-lightspeed";

// const data = [
//     { 
//         id: 0,
//         name: "Pinarello",
//         price: 1000,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 1,
//         name: "Pina Mountai",
//         price: 1700,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 2,
//         name: "Pina Bike",
//         price: 1500,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 3,
//         name: "Pinarello",
//         price: 1000,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 4,
//         name: "Pina Mountai",
//         price: 1700,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 5,
//         name: "Pina Bike",
//         price: 1500,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 6,
//         name: "Pinarello",
//         price: 1000,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 7,
//         name: "Pina Mountai",
//         price: 1700,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },
//     {
//         id: 8,
//         name: "Pina Bike",
//         price: 1500,
//         image: "https://i.postimg.cc/66kQ6Cqc/product-home.png"
//     },

// ]

export default function ProductsScreen({navigation} : any) {
    const [data, setProducts] = useState([]);

    const dispatch = useDispatch();

    // Get current bike state from Redux store
    const bike = useSelector((state) => state.bike);

    useEffect(() => {
        fetch("https://6731d4ca7aaf2a9aff12577b.mockapi.io/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <Stack flexDirection="column" flex={1} style={
            {
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 20
            }
        } width={"100%"}>
            {/* Title */}

            <Stack flexDirection="row" justifyContent="flex-start" alignItems="center">
                <Text color="#E94141" size={17} bold={true} textAlign="left">The world’s Best Bike</Text>
            </Stack>

            {/* Options */}
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center" style={{ marginTop: 20 }} width={"100%"}>
                <Stack flexDirection="row" justifyContent="center" alignItems="center"  style={{
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderColor: "#E94141",
                    borderWidth:1
                }}>
                    <Text color="#E94141" size={15}>All</Text>
                </Stack>
                <Stack flexDirection="row" justifyContent="center" alignItems="center"  style={{
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderColor: "#E94141",
                    borderWidth:1
                }}>
                    <Text color="#E94141" size={15}>Mountain Bike</Text>
                </Stack>
                <Stack flexDirection="row" justifyContent="center" alignItems="center"  style={{
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderColor: "#E94141",
                    borderWidth:1
                }}>
                    <Text color="#E94141" size={15}>Road Bike</Text>
                </Stack>
            </Stack>

            {/* Bike store */}

            <FlatList
            style={{width: "100%", marginTop: 20}}
                data={data}
                renderItem={({ item }) => (
                    <Stack justifyContent="center" alignItems="center" onPress={() =>{
                        dispatch(setBike( item ))
                        console.log(item)
                        navigation.navigate("details");
                    }}>
                        <Image source={{
                            uri: item.image
                        }} style={{ width: 120, height: 120 }} resizeMode="contain" />
                        <Text size={15} color={"#00000099"}>{item.name}</Text>
                        <Stack flexDirection="row" justifyContent="center" alignItems="center">
                            <Text size={15} color="#F7BA83">$</Text>
                            <Text size={15} bold={true} color="#000">{item.price}</Text>
                        </Stack>
                        
                        <Stack style={{
                            //  absolute left

                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}>
                            <Image source={require("../assets/ico_heart.png")} style={
                                {
                                    width: 15,
                                    height: 15
                                }
                            } resizeMode="contain"/>
                        </Stack>
                    </Stack>
                )}
                keyExtractor={item => item.id}
                numColumns={2}  // Đây là phần quan trọng để tạo 2 cột
                // contentContainerStyle={styles.container}
                gap={10}
                columnWrapperStyle={{
                    justifyContent: 'space-between', // Giữa các item trong cùng 1 hàng
                    marginBottom: 10, // Khoảng cách giữa các hàng
                }}
                ItemSeparatorComponent={() => <Stack height={20} />} // Khoảng cách giữa các hàng

            />

        </Stack>
    )
}