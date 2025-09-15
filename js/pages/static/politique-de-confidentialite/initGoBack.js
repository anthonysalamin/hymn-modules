/**
 * UTILITY | initGoBack
 * @build 26.10.24 @updated 13:01
*/

export function initGoBack() {
    (function () {
        function goBackToPreviousPage(button) {
            if (!button) return;
            button.addEventListener("click", () => {
                goBack();
            });
        }

        function goBack() {
            window.history.back();
        }

        document.addEventListener("DOMContentLoaded", () => {
            const BTN_GOBACK = document.querySelector('[data-id="go-back"]');
            goBackToPreviousPage(BTN_GOBACK);
        });
    })();
}