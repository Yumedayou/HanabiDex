import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, Dimensions } from "react-native";
import { styled } from "nativewind";
import FloatingMenu from "../components/FloatingMenu";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      name: "Snow Fairy",
      rarity: "Rare ✦",
      color: "text-yellow-500"
    },
    {
      name: "Altea, Blessed Knight",
      rarity: "Super Rare ✦✦",
      color: "text-purple-500"
    },
    {
      name: "Tactical Advantage",
      rarity: "Uncommon ✦",
      color: "text-green-500"
    }
  ];

  return (
    <StyledView className="flex-1 bg-indigo-50">
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100, width: screenWidth }}>
        <StyledText className="text-2xl font-bold mb-6 text-purple-700">📚 My Hanabidex</StyledText>

        <StyledText className="text-lg font-semibold mb-2 text-gray-700">📁 Binders</StyledText>
        <StyledView className="space-y-2 mb-6">
          <StyledView className="bg-white p-4 rounded-xl shadow-md">
            <StyledText>General Collection</StyledText>
          </StyledView>
          <StyledView className="bg-white p-4 rounded-xl shadow-md">
            <StyledText>✨ Favorites</StyledText>
          </StyledView>
        </StyledView>

        <StyledText className="text-lg font-semibold mb-2 text-gray-700">🛡️ Decks</StyledText>
        <StyledView className="space-y-2 mb-6">
          <StyledView className="bg-white p-4 rounded-xl shadow-md">
            <StyledText>Aggro Blaze</StyledText>
          </StyledView>
          <StyledView className="bg-white p-4 rounded-xl shadow-md">
            <StyledText>Mystic Tempo</StyledText>
          </StyledView>
        </StyledView>

        <StyledText className="text-lg font-semibold mb-3 text-gray-700">🃏 Recently Scanned</StyledText>
        <StyledView className="flex-row justify-between gap-2">
          {cards.map((card, index) => (
            <StyledTouchableOpacity
              key={index}
              onPress={() => setSelectedCard(card)}
              className="bg-white p-2 rounded-xl shadow-md flex-1 items-center"
              style={{ minWidth: screenWidth / 3 - 20 }}
            >
              <StyledImage
                source={require("../assets/placeholder.jpg")}
                className="w-full h-40 rounded-md mb-2"
                resizeMode="cover"
              />
              <StyledText className="text-sm font-semibold text-center text-gray-800">
                {card.name}
              </StyledText>
              <StyledText className={`text-xs ${card.color}`}>{card.rarity}</StyledText>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      </ScrollView>

      <Modal visible={!!selectedCard} transparent animationType="fade">
        <StyledView className="flex-1 bg-black bg-opacity-60 items-center justify-center p-6">
          <StyledView className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
            <StyledImage
              source={require("../assets/placeholder.jpg")}
              className="w-full h-80 rounded-md mb-4"
              resizeMode="cover"
            />
            <StyledText className="text-lg font-bold text-center mb-1 text-gray-800">
              {selectedCard?.name}
            </StyledText>
            <StyledText className={`text-sm text-center ${selectedCard?.color}`}>{selectedCard?.rarity}</StyledText>
            <StyledTouchableOpacity
              onPress={() => setSelectedCard(null)}
              className="mt-4 bg-purple-600 py-2 rounded-lg"
            >
              <StyledText className="text-center text-white font-semibold">Close</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </Modal>

      <FloatingMenu />
    </StyledView>
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
