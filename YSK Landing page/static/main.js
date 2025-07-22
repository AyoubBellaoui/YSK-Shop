

/** Slider */
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1536: {
        slidesPerView: 6,
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // احصل على جميع أزرار البورجر في الصفحة
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  burgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const targetMenu = document.getElementById(target);

      // بدّل بين الكلاسات لتفعيل/إخفاء القائمة
      el.classList.toggle('is-active');
      targetMenu.classList.toggle('is-active');
    });
  });

  // ✅ أغلق القائمة عند الضغط على أي رابط أو زر داخل القائمة
  const menu = document.getElementById('navbarBasicExample');
  const burger = document.querySelector('.navbar-burger');

  if (menu) {
    const closeOnClick = menu.querySelectorAll('a, button');
    closeOnClick.forEach(item => {
      item.addEventListener('click', () => {
        if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
          burger.classList.remove('is-active');
        }
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('order-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const fields = this.querySelectorAll('.input');

    fields.forEach(field => {
      const errorElement = field.parentElement.nextElementSibling;
      if (!field.checkValidity() || !field.value.trim()) {
        errorElement.style.display = 'block';
        errorElement.textContent = getErrorMessage(field);
      } else {
        errorElement.style.display = 'none';
      }
    });
  });

  // إخفاء رسالة الخطأ عند الكتابة
  document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('input', function () {
      const errorElement = this.parentElement.nextElementSibling;
      if (this.value.trim() !== '') {
        errorElement.style.display = 'none';
      }
    });
  });

  // رسائل مخصصة لكل حقل
  function getErrorMessage(field) {
    switch (field.id) {
      case 'Name':
        return 'الرجاء إدخال الاسم الكامل.';
      case 'Phone':
        return 'الرجاء إدخال رقم هاتف صحيح يبدأ بـ 05 أو 06 أو 07 ويحتوي على 10 أرقام.';
      case 'City':
        return 'يرجى إدخال اسم المدينة.';
      case 'Address':
        return 'الرجاء كتابة العنوان الكامل.';
      default:
        return 'الرجاء ملء هذا الحقل.';
    }
  }
});










