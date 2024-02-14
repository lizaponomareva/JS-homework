let auto = new Map();
auto.set(1, 'bmw');
auto.set(2, 'audi');
auto.set(3, 'mercedes');
console.log(auto.get(1));
for (const it of auto.entries()) {
    console.log(`Ключ — ${it[0]}, значение — ${it[1]}`);
}
