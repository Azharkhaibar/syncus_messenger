Tabel Database yang Diperlukan
## 1. Rooms

Mewakili ruang obrolan yang dapat dimasuki pengguna.

room_id (PK)

name — nama ruangan (contoh: "Music Chat", "Movies", dsb.)

description — deskripsi atau topik ruangan.

category_id — FK ke tabel Categories.

region_id — FK ke tabel Regions, jika lokasi-spesifik.

is_private — apakah ruangan privat/password-protected.

password_hash — jika ada kata sandi (opsional).

created_at, updated_at

## 2. Categories

Menampung kategori atau tema umum dari ruangan.
category_id (PK)
name — misalnya "Music", "Anime", "Fresh Rooms", dll.
description

## 3. Regions (Opsional)

Jika platform memungkinkan memilih ruangan berdasarkan lokasi seperti "USA Chat Room", "Indonesia Chat Room", dll.

region_id (PK)
name — nama lokal seperti negara atau zona.
parent_region_id — untuk hirarki (opsional).

## 4. Users (Anonymous or identified)

Menyimpan detail pengguna, walaupun penyimpanan bisa minimal karena anonim.

user_id (PK)
display_name — nama samaran yang pengguna pilih.
created_at

(Jika login memungkinkan: email, hashed password dsb.)

## 5. RoomMembers / UserRoomSessions

Menangani siapa ada di ruangan, termasuk detik masuk dan keluar.

session_id (PK)
room_id (FK)
user_id (FK)
joined_at
left_at
(Opsional: session token, status aktif, dsb.)

## 6. Messages

Untuk menyimpan pesan pengguna di ruang obrolan.

message_id (PK)
room_id (FK)
user_id (FK)
content — teks pesan.
timestamp
(Opsional: tipe pesan – teks/media.)

## 7. Media (Opsional)

Jika pengguna bisa berbagi gambar atau video.

media_id (PK)
message_id (FK)
url atau path.
media_type

## 8. Friends (Jika fitur teman ada)

Meskipun tidak langsung dari halaman Discover, MeetYou menjanjikan kemungkinan berteman.

friendship_id (PK)
user_id
friend_id
status (Pending, Accepted, dsb.)
requested_at, accepted_at

Bagaimana Relasi Antar Tabel:
Tabel	Relasi ke
Rooms	Categories, Regions
RoomMembers	Rooms, Users
Messages	Rooms, Users
Media	Messages
Friends	Users

## Completed Task
- users (OK)
- users profile (OK)
- auth (?)
- friend (OK)
- room (OK)(PERLU DI CEK LAGI)
- media (OK)
- message
