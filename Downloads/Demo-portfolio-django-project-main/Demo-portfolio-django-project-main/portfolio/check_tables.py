#!/usr/bin/env python
import sqlite3

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;")
tables = cursor.fetchall()

print(f'Total: {len(tables)} tables\n')
for i, table in enumerate(tables, 1):
    print(f'{i}. {table[0]}')

conn.close()
