document.querySelectorAll('.toggle-edit').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const input = e.target.previousElementSibling;
        input.readOnly = !input.readOnly;
        e.target.textContent = input.readOnly ? 'Edit' : 'save';
    });
});


