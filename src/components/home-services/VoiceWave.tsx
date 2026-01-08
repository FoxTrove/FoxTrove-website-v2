import { motion } from 'framer-motion';

interface VoiceWaveProps {
  isSpeaking: boolean;
  volume: number; // 0 to 1
  bars?: number;
}

export function VoiceWave({ isSpeaking, volume, bars = 5 }: VoiceWaveProps) {
  return (
    <div className="flex items-center justify-center gap-[3px] h-6 w-12">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-current rounded-full"
          animate={{
            height: isSpeaking 
              ? [8, 8 + (volume * 16), 8] 
              : 4,
            opacity: isSpeaking ? 1 : 0.5
          }}
          transition={{
            duration: 0.2, // Fast response
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.05, // Stagger effect
          }}
          style={{
             minHeight: '4px'
          }}
        />
      ))}
    </div>
  );
}
