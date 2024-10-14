// Получаем элементы с классом header__raz-a
document.querySelectorAll('.header__raz-a').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем ::after у текущего элемента
    item.classList.add('hidden-after');

    // Скрываем ::after у элемента выше с классом header__kottedj
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__kottedj')) {
      previousElement.querySelector('.header__kottedj').classList.add('hidden-after');
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hidden-after');

    // Показываем ::after у элемента выше с классом header__kottedj
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__kottedj')) {
      previousElement.querySelector('.header__kottedj').classList.remove('hidden-after');
    }
  });
});



// Получаем элементы с классом header__kuh
document.querySelectorAll('.header__kuh').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем ::after у текущего элемента
    item.classList.add('hidden-after');

    // Скрываем ::after у элемента выше с классом header__kuh
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__raz-a')) {
      previousElement.querySelector('.header__raz-a').classList.add('hidden-after');
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hidden-after');

    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__raz-a')) {
      previousElement.querySelector('.header__raz-a').classList.remove('hidden-after');
    }
  });
});

// Получаем элементы с классом header__gal
document.querySelectorAll('.header__gal').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем ::after у текущего элемента
    item.classList.add('hidden-after');

    // Скрываем ::after у элемента выше с классом header__gal
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__kuh')) {
      previousElement.querySelector('.header__kuh').classList.add('hidden-after');
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hidden-after');

    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__kuh')) {
      previousElement.querySelector('.header__kuh').classList.remove('hidden-after');
    }
  });
});

// Получаем элементы с классом header__kontakty
document.querySelectorAll('.header__kontakty').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем ::after у текущего элемента
    item.classList.add('hidden-after');

    // Скрываем ::after у элемента выше с классом header__kontakty
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__gal')) {
      previousElement.querySelector('.header__gal').classList.add('hidden-after');
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hidden-after');

    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__gal')) {
      previousElement.querySelector('.header__gal').classList.remove('hidden-after');
    }
  });
});

// Получаем элементы с классом header__kottedj
document.querySelectorAll('.header__kottedj').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем ::after у текущего элемента
    item.classList.add('hidden-after');

    // Скрываем ::after у элемента выше с классом header__kottedj
    const previousElement = item.closest('.header__li').previousElementSibling;
    if (previousElement && previousElement.querySelector('.header__gal')) {
      previousElement.querySelector('.header__gal').classList.add('hidden-after');
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hidden-after');
  });
});