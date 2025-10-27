#!/bin/sh
echo "Menunggu MySQL siap..."
until nc -z mysql 3306; do
  sleep 2
done

echo "Database siap. Jalankan migrate & seed..."
npx prisma migrate deploy
npx prisma db seed

echo "Menjalankan server..."
npm run start

echo "Server berjalan di http://localhost:5000"