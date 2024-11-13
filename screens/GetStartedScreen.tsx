import { Image } from "react-native";
import { Stack, Text } from "rn-lightspeed";


export default function GetStartedScreen({navigation} : any) {

    return (
      <Stack
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 60,
        }}
      >
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <Text
            textAlign="center"
            size={16}
            style={{ width: "80%" }}
            value="A premium online store for sporter and their stylish choice"
          />
        </Stack>

        <Stack>
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            backgroundColor={"#E941411A"}
            style={{
              borderRadius: 50,
              padding: 30,
            }}
          >
            <Image
              source={require("../assets/product_home.png")}
              style={{
                width: 200,
                height: 200,
              }}
              resizeMode="contain"
            />
          </Stack>
        </Stack>

        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            backgroundColor={"#E94141"}
            height={40}
            width={100}
            style={{
              borderRadius: 50,
            }}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "list" }],
              });
            }}
          >
            <Text color="#fff" bold={true} size={15} value="Get Started" />
          </Stack>
        </Stack>
      </Stack>
    );
}