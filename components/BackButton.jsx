import React from 'react';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {
  const router = useRouter();

  // Jangan tampilkan tombol di halaman utama
  if (router.pathname === '/') return null;

  return (
    <button 
      type="button" 
      className="back-button" 
      onClick={() => router.back()}
      aria-label="Kembali ke halaman sebelumnya"
    >
      <AiOutlineArrowLeft />
      <span>Kembali</span>
    </button>
  );
};

export default BackButton;