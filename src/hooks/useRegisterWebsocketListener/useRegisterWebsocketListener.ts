import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useGetWebsocketUrl } from './useGetWebsocketUrl';

export interface UseRegisterWebsocketListenerPropsType {
  onMessage: (message: string) => void;
  address: string;
  apiAddress: string;
}

const timeout = 3000;
const reconnectionAttempts = 3;
const retryInterval = 500;

export function useRegisterWebsocketListener({
  onMessage,
  address,
  apiAddress
}: UseRegisterWebsocketListenerPropsType) {
  const { data: websocketUrl, refetch, error } = useGetWebsocketUrl(apiAddress);

  const websocketRef = useRef<Socket | null>(null);
  const refetchInterval = useRef<any>(null);

  function initializeWebsocketConnection() {
    if (!websocketUrl) {
      return;
    }
    websocketRef.current = io(websocketUrl, {
      forceNew: true,
      reconnectionAttempts,
      timeout,
      query: {
        address: address
      }
    });

    websocketRef.current.onAny((e: any) => {
      // a message was received
      onMessage(e);
    });
  }

  function handleRefetchUrlLogic() {
    if (error) {
      refetchInterval.current = setInterval(refetch, retryInterval);
    } else if (refetchInterval.current != null) {
      clearInterval(refetchInterval.current);
      refetchInterval.current = null;
    }
  }

  useEffect(() => {
    if (address && websocketUrl) {
      initializeWebsocketConnection();
    }
  }, [address, websocketUrl]);

  useEffect(() => {
    return () => {
      websocketRef.current?.close();
    };
  }, []);

  useEffect(() => {
    handleRefetchUrlLogic();
  }, [error]);
}
