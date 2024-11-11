import { FlatList, Image, ScrollView } from "react-native";
import Text from "../components/CText";
import Stack from "../components/Stack";
import { useDispatch, useSelector } from "react-redux";

export default function DetailScreen({navigation}) {


    const dispatch = useDispatch();

    // Get current bike state from Redux store
    const bike = useSelector((state) => state.bike);

    return (
        <ScrollView>
            <Stack width={"100%"} style={
                {
                    backgroundColor: "#fff",
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                <Stack flexDirection="row" justifyContent="center" alignItems="center" width={"100%"}>
                    <Stack backgroundColor="#E941411A" style={{
                        padding: 15,
                        borderRadius: 10,
                    }}>
                        <Image source={bike.image} style={{
                            width: 250,
                            height: 250
                        }} resizeMode="contain" />
                    </Stack>
                </Stack>
                {/* Title product */}
                <Stack>
                    <Text size={25} bold={true}>{bike.name}</Text>
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Text size={17} color="#00000096">15% OFF I {bike.price}$</Text>
                        <Text size={17} style={{
                            textDecorationLine: "line-through",
                            marginLeft: 15
                        }}>449$</Text>
                    </Stack>

                    {/*  Desc */}
                    <Text size={17} style={{
                        marginVertical: 15
                    }} >Description</Text>

                    <Text size={15} color="#00000091" style={{
                        marginVertical: 15
                    }} >It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>

                </Stack>

                {/* Button */}
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center" style={{
                    marginTop: 20,
                    paddingHorizontal: 20
                }} width={"100%"}>
                    <Stack>
                        <Image source={require("../assets/ico_heart.png")} style={{
                            width: 40,
                            height: 40
                        }} resizeMode="contain" />
                    </Stack>

                    <Stack backgroundColor="#E94141" style={{
                        borderRadius: 50,
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }} width={150} onPress={
                        ()=>{
                            navigation.navigate("list");
                        }
                    }>
                        <Text color="#fff" size={17} textAlign="center">Add to cart</Text>
                    </Stack>
                </Stack>
            </Stack>
        </ScrollView>

    )
}