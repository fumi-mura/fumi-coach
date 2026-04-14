"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "カウンセリング、コンサルティングとの違いは何ですか？",
    answer: "カウンセリングは主に「過去」の癒やしや問題解決に焦点を当て、コンサルティングは専門家が「答え」やアドバイスを提示するものです。対してコーチングは「未来」と「可能性」にフォーカスし、対話を通じてあなたの中にある答えを引き出し、行動をサポートします。",
  },
  {
    question: "具体的な相談内容が決まっていなくても大丈夫ですか？",
    answer: "はい、全く問題ありません。「なんとなくモヤモヤする」「今の状況を変えたいけれど、どうすればいいか分からない」といった状態の方も多いです。セッションを通じて何を大切にしたいのか、どこへ向かいたいのかを一緒に紐解いていきます。",
  },
  {
    question: "セッションはどのように行いますか？",
    answer: "ZoomやGoogle Meetなどを使用してオンラインで行います。リラックスできる環境からご参加ください。",
  },
  {
    question: "顔出しをしなくてもいいですか？",
    answer: "コーチングは対話を通じて行うものですので、基本的には顔出しでのご参加をお願いしています。表情や声のトーンなども大切なコミュニケーションの一部となります。",
  },
  {
    question: "準備するものはありますか？",
    answer: "特に特別な準備は必要ありませんが、セッション中に気づいたことや感じたことをメモできる筆記具や、リラックスのために飲み物などの用意もお勧めします。",
  },
  {
    question: "体験セッションだけでもいいですか？",
    answer: "もちろんです。コーチングが自分に合うか、コーチとの相性はどうかを確認するための体験セッションです。無理な勧誘などは一切行いません。",
  },
  {
    question: "継続セッションの頻度はどのくらいですか？",
    answer: "ご自身の状況や目標にもよりますが、多くの方は月1〜2回のペースです。セッションとセッションの間に、日常の中で行動し、変化を感じる時間を大切にしています。",
  },
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="qa" className="bg-surface py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-ink text-3xl md:text-4xl mb-4">
            Q & A
          </h2>
          <p className="font-display italic text-gold tracking-[0.25em] text-sm">
            よくある質問
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-sans text-ink font-medium pr-8">
                  {faq.question}
                </span>
                <span
                  className={`relative w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <span className="absolute top-1/2 left-0 w-full h-px bg-gold -translate-y-1/2" />
                  <span
                    className={`absolute top-0 left-1/2 w-px h-full bg-gold -translate-x-1/2 transition-transform duration-300 ${
                      openIndex === i ? "scale-y-0" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-border/50">
                  <p className="font-sans text-ink-muted text-sm leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-sans text-ink-muted text-sm mb-8">
            その他、気になる点やご不明点がございましたら、公式ラインからお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
