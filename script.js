const timeSelect = document.getElementById("start-time");
const boxes = document.querySelectorAll(".box");

timeSelect.addEventListener("change", () => {
    const selectedTime = timeSelect.value;

    boxes.forEach((box) => {
        const boxTime = box.dataset.time;

        if (selectedTime === "all" || boxTime === selectedTime) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.getElementById("price");
    const priceValue = document.getElementById("price-value");

    function updatePrice() {
        priceValue.textContent = `$${priceSlider.value}`;
    }

    updatePrice();

    priceSlider.addEventListener("input", updatePrice);
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".option-number button");
    const boxes = document.querySelectorAll(".box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selected = button.id;

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            boxes.forEach(box => {
                const golfers = box.dataset.golfers;

                if (selected === "any" || golfers.includes(selected)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const box = button.closest(".box");
            const form = box.querySelector(".booking-form");

            form.classList.toggle("hidden");

            document.querySelectorAll(".booking-form").forEach(otherForm => {
                if (otherForm !== form) {
                    otherForm.classList.add("hiddne");
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const bookingForms = document.querySelectorAll(".booking-form form");
  const dateInput = document.querySelector('input[type="date"]');

  bookingForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const box = form.closest(".box");
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const golfers = form.querySelector('select').value;
      const time = box.querySelector(".time").textContent;
      const price = box.querySelector(".list-price").textContent;

      let selectedDate;
      if (dateInput.value) {
        selectedDate = dateInput.value;
      } else {
        selectedDate = "Not Selected";
      }

      const bookingData = {
        name,
        email,
        golfers,
        time,
        price,
        date: selectedDate,
      };

      localStorage.setItem("bookingDetails", JSON.stringify(bookingData));

      window.location.href = "confirmation.html";
    });
  });
});

