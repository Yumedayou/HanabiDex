import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, Modal } from "react-native";
import { PlusCircle } from "lucide-react-native";

export default function HomeScreen() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { name: "Snow Fairy", rarity: "Rare ✦", color: "text-yellow-500" },
    { name: "Altea, Blessed Knight", rarity: "Super Rare ✦✦", color: "text-purple-500" },
    { name: "Tactical Advantage", rarity: "Uncommon ✦", color: "text-green-500" }
  ];

  return (
    <SafeAreaView className="flex-1 bg-indigo-50 p-4 pb-20 w-full">
      <ScrollView className="p-4 pb-24">
        {/* Binders */}
        <Text className="text-2xl font-bold text-purple-700 mb-4">📚 My Hanabidex</Text>
        <Text className="text-lg font-semibold mb-2">📁 Binders</Text>
        <View className="space-y-2 mb-6">
          <View className="bg-white p-4 rounded-xl shadow-md">
            <Text>General Collection</Text>
          </View>
          <View className="bg-white p-4 rounded-xl shadow-md">
            <Text>✨ Favorites</Text>
          </View>
        </View>

        {/* Decks */}
        <Text className="text-lg font-semibold mb-2">🛡️ Decks</Text>
        <View className="space-y-2 mb-6">
          <View className="bg-white p-4 rounded-xl shadow-md">
            <Text>Aggro Blaze</Text>
          </View>
          <View className="bg-white p-4 rounded-xl shadow-md">
            <Text>Mystic Tempo</Text>
          </View>
        </View>

        {/* Recently Scanned */}
        <Text className="text-lg font-semibold mb-3">🃏 Recently Scanned</Text>
        <View className="flex-row justify-between gap-3">
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCard(card)}
              className="bg-white p-2 rounded-xl shadow-md flex-1 items-center"
            >
              <Image source={require("../assets/placeholder.jpg")} className="w-full h-40 rounded-md mb-2" resizeMode="cover" />
              <Text className="text-sm font-semibold text-center">{card.name}</Text>
              <Text className={`text-xs ${card.color}`}>{card.rarity}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity className="absolute bottom-6 right-6 bg-purple-500 p-4 rounded-full shadow-xl">
        <PlusCircle color="white" size={24} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={!!selectedCard} transparent animationType="fade">
        <View className="flex-1 bg-black bg-opacity-60 items-center justify-center p-6">
          <View className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
            <Image
              source={require("../assets/placeholder.jpg")}
              className="w-full h-80 rounded-md mb-4"
              resizeMode="cover"
            />
            <Text className="text-lg font-bold text-center mb-1">{selectedCard?.name}</Text>
            <Text className={`text-sm text-center ${selectedCard?.color}`}>{selectedCard?.rarity}</Text>
            <TouchableOpacity
              onPress={() => setSelectedCard(null)}
              className="mt-4 bg-purple-600 py-2 rounded-lg"
            >
              <Text className="text-center text-white font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


/*import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;*/
