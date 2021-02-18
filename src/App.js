import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const category = "SMARTPHONE";
  const price = 15000000;

  return (
    <div class="Parentbox">
      <div class="Foto">
        <img src="iphone12remake.jpg"/>
      </div>
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">iPhone 12 Pro/128Gb</h1>
        <p class="Price">IDR {price}</p>
        <p class="Info">
        iOS adalah sistem operasi seluler yang dibuat dan dikembangkan oleh Apple Inc. khusus untuk perangkat kerasnya. Ini adalah sistem operasi yang saat ini memberdayakan banyak perangkat seluler perusahaan, termasuk iPhone, dan iPod Touch; itu juga mendukung iPad sebelum pengenalan iPadOS pada 2019.
        </p>
      </div>
    </div>
  );
}

export default App;
