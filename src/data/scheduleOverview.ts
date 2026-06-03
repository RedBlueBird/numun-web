import { Locale } from "@/types/locales";

export interface ScheduleEntry {
  time?: string;
  event: string;
  location?: string;
}

export interface DaySchedule {
  day1: ScheduleEntry[];
  day2: ScheduleEntry[];
}

const scheduleEn: DaySchedule = {
  day1: [
    { time: "09:00 – 09:30", event: "Registration",                                 location: "ALEP, 1F" },
    { time: "09:35 – 10:00", event: "Opening Ceremony",                             location: "ALEP, 2F, Main Hall" },
    { time: "10:00 – 10:15", event: "Move from Conference Hall to Committee Rooms" },
    { time: "10:15 – 11:45", event: "Committee Session 1 (90min)",                  location: "ALEP Committee Room" },
    { time: "11:45 – 12:30", event: "Lunch Time" },
    { time: "12:30 – 14:00", event: "Committee Session 2 (90min)",                  location: "ALEP Committee Room" },
    { time: "14:00 – 14:15", event: "Break" },
    { time: "14:15 – 15:45", event: "Committee Session 3 (90min)",                  location: "ALEP Committee Room" },
    { time: "15:45 – 15:55", event: "Short Break" },
    { time: "15:55 – 17:25", event: "Committee Session 4 (90min)",                  location: "ALEP Committee Room" },
    { time: "17:30 – 20:00", event: "Social Night",                                 location: "Mei-dining" },
  ],
  day2: [
    { time: "08:45 – 10:30", event: "Arrival",                                      location: "ALEP, 1F" },
    { time: "10:30 – 12:00", event: "Committee Session 5 (90min)",                  location: "ALEP Committee Room" },
    { time: "12:00 – 12:45", event: "Lunch" },
    { time: "12:45 – 14:15", event: "Committee Session 6 (90min)",                  location: "ALEP Committee Room" },
    { time: "14:15 – 14:30", event: "Break" },
    { time: "14:30 – 16:00", event: "Committee Session 7 (90min)",                  location: "ALEP Committee Room" },
    { time: "16:00 – 16:30", event: "Certificate Giving & Memory Time" },
    { time: "16:30 – 17:00", event: "Move to Noyori Hall" },
    { time: "17:00 – 18:30", event: "Awarding & Closing Ceremony",                  location: "Noyori Hall" },
  ],
};

const scheduleJp: DaySchedule = {
  day1: [
    { time: "09:00 – 09:30", event: "受付",                                  location: "ALEP, 1F" },
    { time: "09:35 – 10:00", event: "開会式",                                location: "ALEP, 2F, メインホール" },
    { time: "10:00 – 10:15", event: "カンファレンスホールから委員会室へ移動" },
    { time: "10:15 – 11:45", event: "委員会セッション1（90分）",              location: "ALEP 委員会室" },
    { time: "11:45 – 12:30", event: "昼食" },
    { time: "12:30 – 14:00", event: "委員会セッション2（90分）",              location: "ALEP 委員会室" },
    { time: "14:00 – 14:15", event: "休憩" },
    { time: "14:15 – 15:45", event: "委員会セッション3（90分）",              location: "ALEP 委員会室" },
    { time: "15:45 – 15:55", event: "小休憩" },
    { time: "15:55 – 17:25", event: "委員会セッション4（90分）",              location: "ALEP 委員会室" },
    { time: "17:30 – 20:00", event: "ソーシャルナイト",                       location: "南部食堂 1F 「Mei-dining」" },
  ],
  day2: [
    { time: "08:45 – 10:30", event: "集合",                                  location: "ALEP, 1F" },
    { time: "10:30 – 12:00", event: "委員会セッション5（90分）",              location: "ALEP 委員会室" },
    { time: "12:00 – 12:45", event: "昼食" },
    { time: "12:45 – 14:15", event: "委員会セッション6（90分）",              location: "ALEP 委員会室" },
    { time: "14:15 – 14:30", event: "休憩" },
    { time: "14:30 – 16:00", event: "委員会セッション7（90分）",              location: "ALEP 委員会室" },
    { time: "16:00 – 16:30", event: "修了証授与・記念撮影" },
    { time: "16:30 – 17:00", event: "野依記念学術交流館へ移動" },
    { time: "17:00 – 18:30", event: "表彰式・閉会式",                        location: "野依記念学術交流館" },
  ],
};

export const scheduleOverview: Record<Locale, DaySchedule> = {
  en: scheduleEn,
  jp: scheduleJp,
};

const partyAgendaEn: ScheduleEntry[] = [
  { time: "17:30 – 18:00", event: "Memory Time + Move to Mei Dining" },
  { time: "18:00 – 18:20", event: "Party Opening" },
  { time: "18:20 – 18:40", event: "Nanzan Prime Dance Performance" },
  { time: "18:40 – 18:55", event: "N3ON Dance Performance (CYCLONE 2026)" },
  { time: "18:55 – 20:00", event: "Free Time" },
];

const partyAgendaJp: ScheduleEntry[] = [
  { time: "17:30 – 18:00", event: "記念撮影・Mei Dining へ移動" },
  { time: "18:00 – 18:20", event: "パーティー開会" },
  { time: "18:20 – 18:40", event: "南山プライム ダンスパフォーマンス" },
  { time: "18:40 – 18:55", event: "N3ON ダンスパフォーマンス（CYCLONE 2026）" },
  { time: "18:55 – 20:00", event: "フリータイム" },
];

export const partyAgenda: Record<Locale, ScheduleEntry[]> = {
  en: partyAgendaEn,
  jp: partyAgendaJp,
};
