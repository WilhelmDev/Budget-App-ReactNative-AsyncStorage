import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { FormNewSpendProps } from '../../interfaces'

export default function FormSpendt({
    handleModal
    }:FormNewSpendProps) {
        return (
            <SafeAreaView>
                <Text>FormSpendt</Text>
                <Button title='Close modal' onPress={handleModal}/>
            </SafeAreaView>
        )
}