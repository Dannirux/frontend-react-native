import React from "react";
import {Image, Linking, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
const tw = <Icon name="twitter" size={30} color="black"/>
const ig = <Icon name="instagram" size={30} color="black"/>
const fb = <Icon name="facebook" size={30} color="black"/>
const yt = <Icon name="youtube" size={30} color="black"/>
const tk = <Icon name="tiktok" size={30} color="black"/>
//const twitter = <Icon name=

const ProfileCard = () => {
    const user = {
        avatar: "https://lh3.googleusercontent.com/fife/APg5EOb8l6myJn86-kp9kBdfiBc2_UY88zu6GzF5oD0MKX3lOrB4jWwbgLJcJrXfk2p9656D27TTfrPGRvUMDjXmtBtWFgrLzENKxRGYanpqUzs-7_36OYGsgt7bBrOXgoq8Rh9_EO02-QhsTSuJE5ROUGLNW6wY9u7pQfNYgBQxMjMXarml2rzHVWY8dsyA2vfXdYM8mzEidEuDdPDAIgnrdY_ycChtiLdrS5PMvJ4rFvrbDEbVM3hoLOKSVNIKG9owZualr83VUuGaG3O7xVfR9cFi49CxWW5-X9LJQGiExelMGlGmOCf9BA_cUKWosMDvCkOejBZnuVxb471bi_Ecqu82DtVasoRcCwr6aOGUXWKmIc8foaG5lXBkrGmx8sEslxUT7jsl2GBMQWtZY8Zxi7Xk0dlGWsLCAO4VHMLqUxQEJ761S-XCSsVZQvQpZImiUvMouRSIJvFlP1ZmrUpV2JWBakiwg-Qhhu7T3_7iH7fRtbas9f_qN1utN5GuL2_tp_kqHmoL44tOjDJ3B05VBTkDIsDP951JMRawMiAttH8Zy_dbGlT1fiAwgf3i6YKkZoFIXeF3VrI5hGQHa6hGnqHpIvy3ra137TR6eh-7cgMg_uRYlc0LdYmjUUsaUOvEegOFSQXDUyWKI_QjBh-HIhieeWwpcGoAs-P24v39j4d8dL08I72NZIjOYu65bSfEwYs444Bs0_T3D9Whx-U4XEB_185xwdfFl_R9rmL-Sq7GXEzvoNtQM_eBFAJQlBtIUpA6JGQFiktHY55Gd1vmn_ufOKcYP67gc3O7lek-V5X9k1tyUAL95_-cjh91XW8tEfQ_-zUBq39R4FoL8CJtJ11VRb6hg_vYnmPJmLTN8d1yOomhI3tfbWMWv80fPe9aAnhFToMiEnENxyAG3iIgn-MAcPLkGYvlKwZO9_GUlL6vSCLL7tUdW0WBTWI52qPKhDjBajNnoCWVIJi8Lz8Aw7mHcyUserhs_SWSfuJHYwQscPWS8wqVZHQeIP6stpJbBs1YSTOJiKk8hYX6WBSnCqW0MANrWc1NGdaumTbPvram3LsFkB2g1i0YP310bgVFwp68vr9KAHvs6eNRo2OZo_jGWL78wtkLR63-O3kl6doDZb1sd_AlstgPL5f8R3yRF6Y8yNJb_t05n9X2BegbimYAeoLjj60upf6MBTXIo8jt5WcOsPbsrBKCPYKziTaclqlv6BSZZ7b1HJ5gNhu9MPjzqz0yTrR-NY8i49glMy_KH5Bgx3-9TTrlin7eaolhqzvNvpP8PD7KhH9bNOV6KcmdnMaE3eCPd2S9L7C6xAJyfo3EYtpnx9mVNABnX7E4lAJtxs1Zi9LK7me0H7BQbxj4Fp85-Ci10iiwIZVsy5YAOQY58CO0zH84rcIPd1d_JBnJ2bE_x5gZ4-50ohjj0hJ6x8HKm4wwN1uvphsmG3m9-wArrrhX2w3VYJraGMwS7oVf4YVr2lhcuI7ZTumy5I3QSU7hEdMzWl3EVKY049NuTv0XLaOQBW-P2vCLFHQJyM_Z7hPHeSj07xDP5l93ECK8IZsBw3fHZVVf8S5msA=w1920-h817",
        coverPhoto: "https://www.xtrafondos.com/descargar.php?id=3806&resolucion=2560x1440",
        name: "Danny Toala"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.twitter.com")}>
                    {tw}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.instagram.com")}>
                    {ig}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.facebook.com")}>
                    {fb}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.youtube.com")}>
                    {yt}
                </Text>
                <Text style={{ color: "black" }} onPress={() =>  Linking.openURL("https://www.tiktok.com")}>
                    {tk}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: "center",
            height: 200,
        },
        coverPhoto: {
            width: "100%",
            height: 200
        },
        avatarContainer: {
            alignItems: "center",
            marginTop: -75
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "white"
        },
        name: {
            marginTop: 15,
            fontSize: 20
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-between"
        }
    }
)

export default ProfileCard