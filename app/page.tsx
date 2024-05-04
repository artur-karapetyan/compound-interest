"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState("");

  const calculateInterest = (e: FormEvent) => {
    e.preventDefault();
    if (
      amount.trim().length === 0 ||
      percent.trim().length === 0 ||
      years.trim().length === 0
    )
      return;
    const principal = parseFloat(amount);
    const rate = parseFloat(percent);
    const time = parseFloat(years);

    const interest = principal * Math.pow(1 + rate / 100, time) - principal;
    setResult((principal + interest).toFixed(2));
  };

  return (
    <div className="min-h-[100svh] w-screen">
      <div className="fixed top-0 left-0 w-[100vw] text-[15px] h-[80px] py-2 px-4 text-center bg-white border-b border-border flex flex-row items-center justify-center dark:bg-slate-800">
        Լևոն Շանթի անվան հիմնական դպրոցի 7ա դասարանի նագծային աշխատանք
      </div>
      <div className="flex py-12 flex-col w-screen bg-white dark:bg-[#1c1c1c]">
        <form
          onSubmit={calculateInterest}
          className="flex flex-col gap-5 w-full h-full px-5 py-12"
        >
          <p className="w-full text-center font-semibold">Ավանդի հաշվում</p>
          <Input
            className="w-full h-11"
            placeholder="Գումար"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            className="w-full h-11"
            placeholder="Տոկոս"
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
          <Input
            className="w-full h-11"
            placeholder="Տարի"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
          <Button className="w-full h-11" type="submit">
            Հաշվել
          </Button>
          {result && (
            <p className="w-full text-center font-semibold">
              Տոկոսադրույք՝ {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
