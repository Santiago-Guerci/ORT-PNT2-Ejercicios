<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="socials">
                <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 5.97c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.93 8.93 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.63 4.09A12.7 12.7 0 0 1 3.1 4.89a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.38-.01-.57a9.13 9.13 0 0 0 2.25-2.32z"/>
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                </a>
                <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 9.333v5.334c0 3.256.012 3.665.07 4.945.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245 1.28.058 1.689.07 4.945.07s3.665-.012 4.945-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-4.945V9.333c0-3.256-.012-3.665-.07-4.945-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                </a>
            </div>
            <form class="contact-form" @submit.prevent>
                <h3>Contact Us</h3>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Send</button>
            </form>
        </div>
    </footer>
</template>

<script setup>
// No script logic needed for this simple footer
</script>

<style scoped>
.footer {
    background: #222;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
}
.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.socials {
    display: flex;
    gap: 1.5rem;
}
.socials a {
    color: #fff;
    transition: color 0.2s;
}
.socials a:hover {
    color: #1da1f2;
}
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
}
.contact-form input {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    width: 200px;
}
.contact-form button {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    background: #1da1f2;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
}
.contact-form button:hover {
    background: #0d8ddb;
}
</style>