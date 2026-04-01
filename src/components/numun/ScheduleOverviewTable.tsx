"use client";

import React from "react";
import { tokens } from "@/config/styles";
import { fonts } from "@/config/fonts";

export interface ScheduleEntry {
  time?: string;
  event: string;
  location?: string;
}

interface ScheduleOverviewTableProps {
  day: string;
  entries: ScheduleEntry[];
}

export default function ScheduleOverviewTable({ day, entries }: ScheduleOverviewTableProps) {
  return (
    <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
      {/* Header */}
      <div className="px-3 pt-3">
        <h3 className={`text-3xl font-bold text-white text-center bg-numun-green-dark rounded-lg pt-4 pb-2 ${fonts.itcBenguiat}`}>
          {day}
        </h3>
      </div>

      {/* Body — no background */}
      <div className="px-3 pb-3 pt-2">
        {/*
          3-column grid: [time] [event] [location]
          - time:     max-content width, lighter green bg
          - event:    1fr, yellow bg; spans cols 2–3 when no location
          - location: max-content width, yellow bg
          gap-1 lets the page background show as cell separators
        */}
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "max-content 1fr max-content" }}
        >
          {entries.map((entry, index) => (
            <React.Fragment key={index}>
              {/* Time — col 1, lighter green */}
              <div
                className={`bg-numun-green text-white text-xs font-semibold px-3 py-2.5 flex items-center rounded ${fonts.cerebri}`}
              >
                {entry.time ?? ""}
              </div>

              {/* Event — col 2 (spans to col 3 when no location), yellow */}
              <div
                className={`bg-numun-beige text-numun-green-darkest text-xs font-medium px-3 py-2.5 flex items-center rounded ${fonts.cerebri} ${!entry.location ? "col-span-2" : ""}`}
              >
                {entry.event}
              </div>

              {/* Location — col 3, yellow (only when present) */}
              {entry.location && (
                <div
                  className={`bg-numun-beige text-numun-green-darkest text-xs font-semibold px-3 py-2.5 flex items-center rounded ${fonts.cerebri}`}
                >
                  {entry.location}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
