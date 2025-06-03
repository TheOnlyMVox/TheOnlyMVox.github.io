<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assistant.AI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            animation: {
              'fade-in-up': 'fadeInUp 0.5s ease-out',
              'subtle-pulse': 'subtlePulse 2s infinite ease-in-out',
            },
            keyframes: {
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              subtlePulse: {
                '0%, 100%': { boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.3)' }, /* cyan-400 with opacity */
                '50%': { boxShadow: '0 0 0 10px rgba(56, 189, 248, 0)' },
              }
            }
          }
        }
      }
    </script>
    <style>
      /* For scrollbar styling to match dark theme */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #1e293b; /* slate-800 */
      }
      ::-webkit-scrollbar-thumb {
        background: #38bdf8; /* cyan-400 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #0ea5e9; /* cyan-500 */
      }
    </style>
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@^19.1.0",
    "react-dom/": "https://esm.sh/react-dom@^19.1.0/",
    "react/": "https://esm.sh/react@^19.1.0/",
    "react-router-dom": "https://esm.sh/react-router-dom@^7.6.1"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
<body class="bg-slate-900 antialiased">
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
</body>
</html>
