import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function HelpAndSupportScreen() {

    const list = [
        'Contact Us',
        'Accessibilty Services',
        'Nondiscrimination Notice',
        'SIGIS User Agreement',
        'Disclaimers'
    ]

    return (
        < View style={{ backgroundColor: '#DDDDDD', marginTop:20, marginHorizontal:20 }}>
            <View style={{ backgroundColor: 'white' }}>
                {list.map((option, index) => (
                    <View key={index} style={{
                        borderBottomWidth: 3,
                        borderBottomColor: '#DDDDDD', padding: 10
                    }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>{option}</Text>
                        </TouchableOpacity>
                    </View>

                ))}
            </View>
        </View >
    )
}

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 20,
        fontSize: 20,
        color: '#2b2bcd',
        fontWeight: 'bold'
    },
});