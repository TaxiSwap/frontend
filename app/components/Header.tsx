'use client';
import React from 'react';
import useWallet from '../hooks/useWallet'
import WalletButton from './WalletButton';
import NetworkButton from './NetworkButton';

const Header = () => {
  const { connect, account } = useWallet();

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 p-5 shadow-md">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-white text-2xl font-bold">
        Dollar Bridge
      </div>
      <div className="flex items-center">
        <NetworkButton />
        <div className="ml-4">
          {account && (
            <div className="text-sm bg-red-600 px-3 py-1 rounded-full">
              Unsupported Network
            </div>
          )}
        </div>
        <WalletButton />
      </div>
    </div>
  </header>
  );
};

export default Header;