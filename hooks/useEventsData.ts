"use client";

import { useEffect, useState } from "react";
import raw from "@/content/events.json";

export type EventType = "Meditation" | "Trip" | "Competition" | "Other";

export interface EventItem {
  title: string;
  date: string;
  type: EventType;
  description: string;
  location: string;
  image: string;
  registerUrl?: string;
  registerOpen?: string;
  registerClose?: string;
  formEmbedCode?: string;
}

interface RawEvents {
  events: EventItem[];
}

export function useEventsData(): EventItem[] {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const json = raw as unknown as RawEvents;
    setEvents(json.events);
  }, []);

  return events;
}
