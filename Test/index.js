false && true || true ; // true тк первый результат сравнения с логическим И дает False, но второй оператор смотрит что есть True и определяет последнее значение Тру

false && (true || true); // false тк первое действие в скобках дает Тру, но оператор или встречает первый фолс слева и ответ Фолс

'10' + (5 === 6); // "10false" тк 10 в данном варианте это строка, а строгое равенство 5===6 не является верным

'10' - 5 === 6; //  false тк часть выражения не является числом имеем такой ответ

(+null == false) < 1; // false тк значение null не равно никакому другому значению

(+null == false) < 1 ** 5; // false тк значение null не равно никакому другому значению

undefined + 5 > null + 1; // false тк null и undefined дают фолс
