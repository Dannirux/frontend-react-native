import React from "react";
import {View} from "react-native";
import FormComponent from "./Form";
import ListComponent from "../list/List";

const UsersComponent = () => {
    return (
        <View>
            <View style={{ height: "40%" }}>
                <FormComponent />
            </View>
            <View style={{ height: "60%" }}>
                <ListComponent />
            </View>
        </View>
    )
}
export default UsersComponent