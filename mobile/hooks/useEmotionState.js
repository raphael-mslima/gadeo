import { useState } from 'react';

export default function useEmotionState() {
  const [emotion, setEmotion] = useState(null);
  return { emotion, setEmotion };
}
