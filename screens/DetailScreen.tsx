import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Text } from "rn-lightspeed";

export default function DetailScreen({navigation} : any) {


    const dispatch = useDispatch();

    // Get current bike state from Redux store
    const bike = useSelector((state) => state.bike);

    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch data from API
        fetch("https://6731d4ca7aaf2a9aff12577b.mockapi.io/products/" + bike.id).then((response) => {
            return response.json();
        }).then((data) => {
            setData(data);
        });
    }
    , []);

    return (
      <ScrollView>
        <Stack
          width={"100%"}
          style={{
            backgroundColor: "#fff",
            paddingTop: 70,
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width={"100%"}
            style={{
                marginBottom: 50
            }}
          >
            <Stack
              backgroundColor="#E941411A"
              style={{
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: data.image,
                }}
                style={{
                  width: 250,
                  height: 250,
                }}
                resizeMode="contain"
              />
            </Stack>
          </Stack>
          {/* Title product */}
          <Stack>
            <Text size={25} bold={true}>
              {data.name}
            </Text>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text size={17} color="#00000096">
                15% OFF I {data.price}$
              </Text>
              <Text
                size={17}
                style={{
                  textDecorationLine: "line-through",
                  marginLeft: 15,
                }}
              >
                449$
              </Text>
            </Stack>

            {/*  Desc */}
            <Text
              size={17}
              style={{
                marginVertical: 15,
              }}
            >
              Description
            </Text>

            <Text
              size={15}
              color="#00000091"
              style={{
                marginVertical: 15,
              }}
            >
              {data.description}
            </Text>
          </Stack>

          {/* Button */}
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{
              marginTop: 50,
              paddingHorizontal: 20,
            }}
            width={"100%"}
          >
            <Stack>
              <Image
                source={require("../assets/ico_heart.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
                resizeMode="contain"
              />
            </Stack>

            <Stack
              backgroundColor="#E94141"
              style={{
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              width={150}
              onPress={() => {
                // reset navigation
                navigation.reset({
                  index: 0,
                  routes: [{ name: "list" }],
                });
              }}
            >
              <Text color="#fff" size={17} textAlign="center">
                Add to cart
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    );
}