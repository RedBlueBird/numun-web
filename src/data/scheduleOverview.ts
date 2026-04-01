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
    { time: "09:00 – 09:30", event: "Registration",                          location: "ALEP, 1F" },
    { time: "09:35 – 10:00", event: "Opening Ceremony",                      location: "ALEP, 2F, Main Hall" },
    { time: "10:00 – 10:15", event: "Move from Main Hall to Committee Rooms" },
    { time: "10:15 – 11:45", event: "Committee Session 1 (90min)",           location: "ALEP Committee Room" },
    { time: "11:45 – 12:30", event: "Lunch Time" },
    { time: "12:30 – 14:00", event: "Committee Session 2 (90min)",           location: "ALEP Committee Room" },
    { time: "14:00 – 14:15", event: "Break" },
    { time: "14:15 – 15:45", event: "Committee Session 3 (90min)",           location: "ALEP Committee Room" },
    { time: "15:45 – 15:55", event: "Short Break" },
    { time: "15:55 – 17:25", event: "Committee Session 4 (90min)",           location: "ALEP Committee Room" },
    { time: "17:30 – 18:00", event: "Memory Time" },
    { time: "18:00 – 19:00", event: "Commute to Social Night Venue" },
    { time: "19:00 – 22:00", event: "Social Night",                          location: "TBA" },
  ],
  day2: [
    { time: "08:45 – 09:00", event: "Arrival",                               location: "ALEP, 1F" },
    { time: "09:00 – 10:30", event: "Committee Session 5 (90min)",           location: "ALEP Committee Room" },
    { time: "10:30 – 10:45", event: "Break" },
    { time: "10:45 – 12:15", event: "Committee Session 6 (90min)",           location: "ALEP Committee Room" },
    { time: "12:15 – 13:00", event: "Lunch Time" },
    { time: "13:00 – 14:30", event: "Committee Session 7 (90min)",           location: "ALEP Committee Room" },
    { time: "14:30 – 16:00", event: "Certificate Giving",                    location: "ALEP Committee Room" },
    {                         event: "Memory Time" },
    {                         event: "Move to Noyori Hall" },
    { time: "15:00 – 16:30", event: "Awarding & Closing Ceremony",           location: "Noyori Hall" },
  ],
};

const scheduleJp: DaySchedule = {
  day1: [
    { time: "09:00 – 09:30", event: "受付",                                  location: "ALEP, 1F" },
    { time: "09:35 – 10:00", event: "開会式",                                location: "ALEP, 2F, メインホール" },
    { time: "10:00 – 10:15", event: "メインホールから委員会室へ移動" },
    { time: "10:15 – 11:45", event: "委員会セッション1（90分）",              location: "ALEP 委員会室" },
    { time: "11:45 – 12:30", event: "昼食" },
    { time: "12:30 – 14:00", event: "委員会セッション2（90分）",              location: "ALEP 委員会室" },
    { time: "14:00 – 14:15", event: "休憩" },
    { time: "14:15 – 15:45", event: "委員会セッション3（90分）",              location: "ALEP 委員会室" },
    { time: "15:45 – 15:55", event: "小休憩" },
    { time: "15:55 – 17:25", event: "委員会セッション4（90分）",              location: "ALEP 委員会室" },
    { time: "17:30 – 18:00", event: "記念撮影" },
    { time: "18:00 – 19:00", event: "ソーシャルナイト会場への移動" },
    { time: "19:00 – 22:00", event: "ソーシャルナイト",                       location: "未定" },
  ],
  day2: [
    { time: "08:45 – 09:00", event: "集合",                                  location: "ALEP, 1F" },
    { time: "09:00 – 10:30", event: "委員会セッション5（90分）",              location: "ALEP 委員会室" },
    { time: "10:30 – 10:45", event: "休憩" },
    { time: "10:45 – 12:15", event: "委員会セッション6（90分）",              location: "ALEP 委員会室" },
    { time: "12:15 – 13:00", event: "昼食" },
    { time: "13:00 – 14:30", event: "委員会セッション7（90分）",              location: "ALEP 委員会室" },
    { time: "14:30 – 16:00", event: "修了証授与",                            location: "ALEP 委員会室" },
    {                         event: "記念撮影" },
    {                         event: "野依記念学術交流館へ移動" },
    { time: "15:00 – 16:30", event: "表彰式・閉会式",                        location: "野依記念学術交流館" },
  ],
};

export const scheduleOverview: Record<Locale, DaySchedule> = {
  en: scheduleEn,
  jp: scheduleJp,
};
