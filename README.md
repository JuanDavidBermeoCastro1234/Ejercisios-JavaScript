# Taller de lógica básica en JavaScript

**Instrucciones:** Implementa cada ejercicio en JavaScript, asegurándote de seguir buenas prácticas de codificación.

## **Ejercicios:**

### **1. Número interesante**

Escribe una función que determine si un número entero positivo **n** es "interesante". Un número es interesante si es múltiplo de 7 o contiene un 7 en sus dígitos.

**Ejemplo:**

```jsx
console.log(esInteresante(71)); // true (contiene un 7)
console.log(esInteresante(49)); // true (es múltiplo de 7)
console.log(esInteresante(23)); // false
```

---

### **2. Rango de números primos**

Crea una función que reciba dos números **a** y **b** y retorne un array (también podría implementarse sin array) con todos los números primos en ese rango (incluyendo **a** y **b** si son primos)

```jsx
console.log(primosEnRango(10, 20)); // [11, 13, 17, 19]
```

---

### **3. Secuencia de Collatz**

La **secuencia de Collatz** se genera de la siguiente forma:

- Si **n** es par, el siguiente número es **n / 2**.
- Si **n** es impar, el siguiente número es **3n + 1**.
- Se repite este proceso hasta llegar a 1.Escribe una función que reciba un número y devuelva la cantidad de pasos necesarios para llegar a 1.**Ejemplo:**

```jsx
console.log(collatz(6)); // 8 (6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
```

---

### **4. Palíndromo sin espacios ni signos**

Crea una función que reciba una cadena y determine si es un palíndromo, ignorando espacios, mayúsculas, minúsculas y signos de puntuación.

**Ejemplo**

```jsx
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("¿Acaso hubo búhos acá?")); // true
```

---

### **5. Mayor producto de pares consecutivos**

Dado un array de enteros positivos, encuentra el mayor producto entre dos números consecutivos que sean pares.

**Ejemplo:**

```jsx
console.log(mayorProductoPar([3, 6, 2, 9, 10, 4])); // 20 (10 * 2)
```

---

### **6. Número feliz**

Un número es "feliz" si al reemplazarlo por la suma de los cuadrados de sus dígitos, repitiendo este proceso, se llega a 1.

Si entra en un ciclo infinito, no es feliz.

**Ejemplo:**

```jsx
console.log(esFeliz(19)); // true (19 → 82 → 68 → 100 → 1)
console.log(esFeliz(4)); // false
```

---

### **7. Suma de dígitos persistente**

Crea una función que sume los dígitos de un número repetidamente hasta obtener un solo dígito.

**Ejemplo:**

```jsx
console.log(sumaPersistente(9875)); // 2 (9+8+7+5=29 → 2+9=11 → 1+1=2)
```

---

### **8. Conversión a número romano**

Escribe una función que convierta un número entero en su representación en números romanos.

**Ejemplo:**

```jsx
console.log(aRomano(1987)); // "MCMLXXXVII"
```

---

### **9. Triángulo de Floyd**

Imprime el **Triángulo de Floyd**, dado un número **n** que representa la cantidad de filas.

**Ejemplo para n = 4:**

```jsx
1
2 3
4 5 6
7 8 9 10
```

---

### **10. Números automórficos**

Un número es **automórfico** si su cuadrado termina con el mismo número.

**Ejemplo:**