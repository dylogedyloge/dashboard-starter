"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
function englishToPersian(input: number) {
  const persianDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];
  return input.toString().replace(/\d/g, (x: any) => persianDigits[x]);
}

const data = [
  {
    name: "فروردین",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "اردیبهشت",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "خرداد",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "تیر",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "مرداد",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "شهریور",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "مهر",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "آبان",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "آذر",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "دی",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "بهمن",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "اسفند",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];
const dataRTL = [...data].reverse();

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dataRTL}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tick={{ dy: 10, dx: -10 }}
          angle={-45}
        />

        <YAxis
          orientation="right"
          stroke="#888888"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tick={{ dx: 8 }}
          tickFormatter={(value) => englishToPersian(value)}
          label={{
            value: "فروش( به تومان)",
            angle: -90,
            position: "insideRight",
          }}
        />

        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
