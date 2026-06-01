create extension if not exists "pgcrypto";

create table if not exists public.tables (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  capacity integer not null check (capacity > 0),
  created_at timestamptz not null default now()
);

create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  status text not null check (status in ('pending', 'confirmed', 'declined')) default 'pending',
  dietary_restrictions text,
  category text not null check (category in ('family', 'friends', 'work', 'other')) default 'other',
  table_id uuid references public.tables(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists idx_guests_status on public.guests(status);
create index if not exists idx_guests_category on public.guests(category);
create index if not exists idx_guests_table_id on public.guests(table_id);

alter table public.tables enable row level security;
alter table public.guests enable row level security;

create policy "Allow read tables"
on public.tables
for select
using (true);

create policy "Allow insert tables"
on public.tables
for insert
with check (true);

create policy "Allow update tables"
on public.tables
for update
using (true)
with check (true);

create policy "Allow delete tables"
on public.tables
for delete
using (true);

create policy "Allow read guests"
on public.guests
for select
using (true);

create policy "Allow insert guests"
on public.guests
for insert
with check (true);

create policy "Allow update guests"
on public.guests
for update
using (true)
with check (true);

create policy "Allow delete guests"
on public.guests
for delete
using (true);
