import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PlusCircle } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    { label: 'Scan', onPress: () => console.log('Scan') },
    { label: 'Add Card', onPress: () => console.log('Add Card') },
    { label: 'Search', onPress: () => console.log('Search') }
  ];

  return (
    <StyledView className="absolute bottom-6 right-6 items-end">
      {isOpen && (
        <StyledView className="mb-2 space-y-2">
          {actions.map((action, idx) => (
            <StyledTouchableOpacity
              key={idx}
              onPress={() => {
                action.onPress();
                setIsOpen(false);
              }}
              className="bg-white/40 backdrop-blur-md border border-white/30 p-3 rounded-xl shadow-md w-40"
            >
              <StyledText className="text-center font-semibold text-gray-800">{action.label}</StyledText>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      )}

      <StyledTouchableOpacity
        onPress={toggleMenu}
        className="bg-purple-500 p-4 rounded-xl shadow-xl"
      >
        <PlusCircle color="white" size={24} />
      </StyledTouchableOpacity>
    </StyledView>
  );
}
