
-- Выполните этот скрипт в SQL Editor в Supabase

-- 1. Добавляем колонку language в таблицу app_users
ALTER TABLE app_users 
ADD COLUMN IF NOT EXISTS language text DEFAULT 'ru';

-- 2. (Опционально) Обновляем существующие записи
UPDATE app_users 
SET language = 'ru' 
WHERE language IS NULL;
