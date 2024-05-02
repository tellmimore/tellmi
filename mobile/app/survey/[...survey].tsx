import { useLocalSearchParams } from "expo-router";
import { Text } from 'react-native';
import { useEffect, useState } from "react";
import { useStateStore } from "../stateStore";

export default function SurveyPage() {
    const { survey } = useLocalSearchParams(); 

    const { study } = useStateStore(); 

    return (
        <Text>
            {JSON.stringify(study)}
        </Text>
    )
}
