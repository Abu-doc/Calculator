document.addEventListener('DOMContentLoaded', () => {
    const res = document.getElementById('res');

    function Solve(val) {
        res.value += val;
    }

    function Result() {
        try {
            const expression = res.value.replace('x', '*');
            res.value = eval(expression);
        } catch {
            res.value = 'Error';
        }
    }

    function Clear() {
        res.value = '';
    }

    function Back() {
        res.value = res.value.slice(0, -1);
    }

    // Button click handlers
    document.getElementById('clear').addEventListener('click', Clear);
    document.getElementById('backspace').addEventListener('click', Back);
    document.querySelectorAll('.btn input[type="button"]').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (value === '=') {
                Result();
            } else if (value === 'C') {
                Clear();
            } else if (value === '←') {
                Back();
            } else {
                Solve(value);
            }
        });
    });

    // Keyboard input handler
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        // Handle specific keys
        if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            event.preventDefault(); // Prevent default action
            Solve(key === '*' ? 'x' : key);
        } else if (key === 'Enter') {
            event.preventDefault(); // Prevent default action
            Result();
        } else if (key === 'Backspace') {
            event.preventDefault(); // Prevent default action
            Back();
        } else if (key === 'Escape') {
            event.preventDefault(); // Prevent default action
            Clear();
        }
    });
});
