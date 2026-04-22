"use client";
import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";


const faqs = [
  { q: "What is MST Blockchain?", a: "MST is a high-performance Layer-1 blockchain designed for institutional-grade security and sub-second finality." },
  { q: "Is MST secure?", a: "Yes. Our protocol undergoes regular third-party audits and utilizes a multi-layered consensus mechanism to ensure asset safety." },
  { q: "How do I create a wallet?", a: "Connect via MetaMask or any WalletConnect provider. Simply update your RPC settings to the MST Mainnet." },
  { q: "What makes MST different?", a: "MST offers unmatched scalability with near-zero gas fees ($0.0001 per tx) while maintaining full EVM compatibility." },
  { q: "Can I build dApps on MST?", a: "Absolutely. MST supports Solidity and familiar developer tools like Hardhat and Foundry for seamless deployment." },
  { q: "What is the transaction speed?", a: "The network supports upwards of 10,000 TPS with block confirmation times averaging under 2 seconds." },
  { q: "Gas fees?", a: "Optimized to be a fraction of a cent, making it ideal for high-frequency microtransactions." },
  { q: "Open source?", a: "Yes, our node software and core protocols are fully transparent and available on GitHub." },
  { q: "NFT support?", a: "MST supports ERC-721 and ERC-1155 standards for seamless digital asset management." },
];

export default function FAQSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [openIndex, setOpenIndex] = useState(null);

  const showMore = () => setVisibleCount((prev) => prev + 2);
  const showLess = () => setVisibleCount(4);

  return (
            
    <section className="relative  py-20 px-6 overflow-hidden">
      
      {/* Soft Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto relative z-0">
       
        {/* Header */}
        <div className="text-center mb-20">
         

          <h2 className="bungee-regular text-6xl md:text-6xl leading-tight text-black font-extrabold uppercase">
            Frequently Asked{" "}
            <span className="text-red-600">Questions</span>
          </h2>

          <p className="mt-6 text-gray-800 text-lg max-w-xl mx-auto">
            Everything you need to know about the MST ecosystem. Can’t find it? Ask our community.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {faqs.slice(0, visibleCount).map((item, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-300 border rounded-2xl p-6 ${
                openIndex === i 
                ? 'bg-red-50 border-red-500 shadow-md' 
                : 'bg-white border-gray-200 hover:border-red-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === i ? 'text-red-500' : 'text-black'
                }`}>
                  {item.q}
                </span>

                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-red-500' : 'text-gray-400'
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center">
          {visibleCount < faqs.length ? (
            <button
              onClick={showMore}
              className="px-8 py-4 bg-red-500 text-white text-sm font-semibold tracking-wide  rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:bg-red-600"
            >
              Load More Questions
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-8 py-4 border border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              Show Less
            </button>
          )}

          <div className="mt-12 flex items-center gap-2 text-gray-500 text-sm">
            <MessageCircle className="w-4 h-4 text-red-500" />
            <span>
              Still stuck?{" "}
            <a href="https://buddy.mstblockchain.com/chat" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <button className="text-black font-medium hover:underline">
                Chat with us
              </button>
              </a>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}