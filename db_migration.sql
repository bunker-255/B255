
-- Скрипт миграции для добавления столбца market_cost

-- 1. Добавляем столбец market_cost, если его нет
ALTER TABLE sos_tickets 
ADD COLUMN IF NOT EXISTS market_cost text DEFAULT '-';

-- 2. (Опционально) Если вы хотите, чтобы у старых записей, где null, проставился прочерк
UPDATE sos_tickets 
SET market_cost = '-' 
WHERE market_cost IS NULL;

-- 3. Проверяем, что столбец добавился
SELECT id, cost, market_cost FROM sos_tickets LIMIT 5;
