# goit-js-hw-11-timer

           Таймер зворотного відліку

Створи плагін налаштовуваного таймера, який веде зворотний відлік до попередньо визначеної дати.
Такий плагін може використовуватися в блогах і інтернет-магазинах та на сторінках реєстрації подій, під час технічного обслуговування і т. д.

//====================================================================================


Плагін очікує наступну HTML-розмітку і показує чотири цифри:дні,години,хвилини і секунди в форматі XX:XX:XX:XX.
Кількість днів може складатися з більш ніж двох цифр.

//====================================================================================

<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>

//====================================================================================

Плагін - це клас CountdownTimer, екземпляр якого створює новий таймер з настройками.

new CountdownTimer({
selector: '#timer-1',
targetDate: new Date('Jul 17, 2019'),
});

//====================================================================================

Для підрахунку значень використовуй такі готові формули, де time - різниця між targetDate 
і поточною датою.

/\*

- Дні, що залишилися: ділимо значення UTC на 1000 _ 60 _ 60 \* 24, кількість
- мілісекунд в один день (мілісекунди _ секунди _ хвилини _ години)
  _/
  const days = Math.floor(time / (1000 _ 60 _ 60 \* 24));

/\*

- Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
- залишку% і ділимо його на кількість мілісекунд в одній годині
- (1000 _ 60 _ 60 = мілісекунди _ хвилини _ секунди)
  _/
  const hours = Math.floor((time % (1000 _ 60 _ 60 _ 24)) / (1000 _ 60 _ 60));

/\*

- Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
- мілісекунд в одній хвилині (1000 _ 60 = мілісекунди _ секунди)
  _/
  const mins = Math.floor((time % (1000 _ 60 _ 60)) / (1000 _ 60));

/\*

- Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
- миллисекунд в одной секунде (1000)
  _/
  const secs = Math.floor((time % (1000 _ 60)) / 1000);
//====================================================================================