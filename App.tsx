import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
import Header from './src/components/Header';

export default function App() {

return (
	<View style={styles.containerApp}>
		<StatusBar style='auto' translucent={true}/>

		<View style={styles.container}>

			<Header />

		</View>

	</View>
);
}

const styles = StyleSheet.create({
	containerApp: {
		// flex:1,
		// backgroundColor: '#e5e5e5',
	},
	container: {
		
	},
});
