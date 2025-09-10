export interface Message {
  id: number;
  text?: string;
  type?: "received" | "sent";
  time?: string;
  date?: string;
}

export const messages: Message[] = [
  { id: 1, text: "Nulla efficitur elit nunc...", type: "received", time: "20:20" },
  { id: 2, text: "massa malesuada eleifend.", type: "sent", time: "20:21" },
  { id: 3, date: "Rabu, 27 Feb 2025" },
  { id: 4, text: "sodales suscipit", type: "received", time: "08:15" },
  { id: 5, text: "massa malesuada eleifend...", type: "received", time: "08:17" },
  { id: 6, text: "Oke noted yaa!", type: "sent", time: "08:20" },
  { id: 7, text: "Nanti sore jadi ketemu kan?", type: "sent", time: "08:22" },
  { id: 8, text: "Iya insyaAllah jadi", type: "received", time: "08:25" },
  { id: 9, text: "Jam berapa enaknya?", type: "received", time: "08:25" },
  { id: 10, text: "Abis maghrib aja gimana?", type: "sent", time: "08:27" },

  { id: 11, date: "Kamis, 28 Feb 2025" },
  { id: 12, text: "Udah di jalan?", type: "received", time: "18:50" },
  { id: 13, text: "Belum, lagi siap² dulu", type: "sent", time: "18:52" },
  { id: 14, text: "Oke aku tunggu di cafe ya", type: "received", time: "18:55" },
  { id: 15, text: "Sip, bentar lagi otw 🚗", type: "sent", time: "18:57" },

  { id: 16, date: "Jumat, 1 Mar 2025" },
  { id: 17, text: "Eh btw makasih ya kemarin traktirannya 🙏", type: "received", time: "09:10" },
  { id: 18, text: "Wkwk santai ajaa, kapan² gantian ya 😁", type: "sent", time: "09:12" },
  { id: 19, text: "Siap, noted hehe", type: "received", time: "09:13" },
  { id: 20, text: "Hari ini sibuk kah?", type: "received", time: "09:15" },
  { id: 21, text: "Lumayan, ada deadline 😩", type: "sent", time: "09:16" },
  { id: 22, text: "Semangat yaa 💪", type: "received", time: "09:17" },

  { id: 23, date: "Sabtu, 2 Mar 2025" },
  { id: 24, text: "Lagi dimana?", type: "sent", time: "15:00" },
  { id: 25, text: "Di rumah aja, kenapa?", type: "received", time: "15:02" },
  { id: 26, text: "Mau ngajak nongkrong bentar", type: "sent", time: "15:05" },
  { id: 27, text: "Boleh, jam berapa?", type: "received", time: "15:06" },
  { id: 28, text: "Abis ashar deh", type: "sent", time: "15:07" },
  { id: 29, text: "Gas!", type: "received", time: "15:07" },

  { id: 30, date: "Minggu, 3 Mar 2025" },
  { id: 31, text: "Besok udah mulai kerja kan?", type: "received", time: "21:00" },
  { id: 32, text: "Iya bener, liburan singkat banget yaa 😅", type: "sent", time: "21:02" },
  { id: 33, text: "Haha iya, semoga minggu depan bisa jalan lagi", type: "received", time: "21:05" },
  { id: 34, text: "Aamiin 🙏", type: "sent", time: "21:07" },
];
