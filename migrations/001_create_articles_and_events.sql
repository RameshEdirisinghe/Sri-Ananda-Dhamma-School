-- migrations/001_create_articles_and_events.sql

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image text,
  preview text,
  link text,
  updated_at timestamp default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date date,
  link text,
  isLive boolean default false
);
