import { useEffect, useState, useRef, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '';
const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '';

export type VapiStatus = 'idle' | 'connecting' | 'active' | 'error';

export function useVapi() {
  const [status, setStatus] = useState<VapiStatus>('idle');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [userVolume, setUserVolume] = useState(0);
  const [conversation, setConversation] = useState<Array<{ role: 'user' | 'assistant', text: string }>>([]);
  const vapiRef = useRef<any>(null);
  
  // ... (AudioContext refs remain the same) ...

  // ... (startLocalVolumeAnalysis remains the same) ...
  // ... (stopLocalVolumeAnalysis remains the same) ...

  useEffect(() => {
    // ... (local analysis useEffect remains the same) ...
  }, [status]);

  useEffect(() => {
    console.log('useVapi: initializing...', { 
        hasKey: !!publicKey, 
        keyLength: publicKey?.length,
        hasAssistantId: !!assistantId 
    });
    
    if (!publicKey) {
      console.error('VAPI public key not found in environment variables');
      return;
    }

    let vapi: any;
    try {
        vapi = new Vapi(publicKey);
        vapiRef.current = vapi;
        console.log('VAPI instance created successfully');
    } catch (err) {
        console.error('Error creating VAPI instance:', err);
        return;
    }

    const onCallStart = () => {
        setStatus('active');
        setConversation([]); // Reset conversation on new call
        console.log('Call started');
    };
    const onCallEnd = () => {
      setStatus('idle');
      setIsSpeaking(false);
      setVolume(0);
      console.log('Call ended');
    };
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);
    const onVolumeLevel = (level: number) => setVolume(level);
    const onMessage = (message: any) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
            setConversation(prev => [...prev, { role: message.role, text: message.transcript }]);
        }
    };
    const onError = (e: any) => {
      console.error('Vapi error:', e);
      setStatus('error');
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);
    vapi.on('volume-level', onVolumeLevel);
    vapi.on('message', onMessage);
    vapi.on('error', onError);

    return () => {
      vapi.stop();
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = useCallback(async () => {
    console.log('toggleCall triggered. Current status:', status);
    
    const vapi = vapiRef.current;
    
    if (!vapi) {
        console.error('VAPI instance not initialized');
        // Try to re-init if possible or alert user
        if (!publicKey) {
             alert('Vapi Public Key is missing. Please check your configuration.');
             return;
        }
        return;
    }
    
    if (!assistantId) {
        console.error('Assistant ID missing');
        alert('Vapi Assistant ID is missing. Please check your configuration.');
        return;
    }

    if (status === 'idle' || status === 'error') {
      setStatus('connecting');
      try {
        console.log('Starting call with assistantId:', assistantId);
        
        // Add a timeout to prevent infinite 'connecting' state
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection timed out')), 10000)
        );
        
        await Promise.race([
            vapi.start(assistantId),
            timeoutPromise
        ]);
        
      } catch (err) {
        console.error('Failed to start call:', err);
        setStatus('error');
        alert('Failed to connect to AI Voice Agent. Please try again.');
      }
    } else {
        console.log('Stopping call...');
        vapi.stop();
    }
  }, [status]);
  
  return {
    status,
    isSpeaking,
    volume,
    userVolume,
    conversation,
    toggleCall
  };
}


