-- Вставьте этот код в SQL Editor в панели управления Supabase и нажмите RUN

-- 1. Добавляем колонку subscriptions (тип JSONB, по умолчанию пустой объект)
ALTER TABLE app_users 
ADD COLUMN IF NOT EXISTS subscriptions jsonb DEFAULT '{}'::jsonb;

-- 2. Обновляем существующие записи, у которых эта колонка пустая (на всякий случай)
UPDATE app_users 
SET subscriptions = '{}'::jsonb 
WHERE subscriptions IS NULL;

-- 3. (Опционально) Проверяем, что колонка добавилась
SELECT * FROM app_users LIMIT 1;