export const useDarkMode = () => {
  const isDark = useState("isDark", () => false);

  const applyTheme = (value: boolean) => {
    isDark.value = value;

    if (import.meta.client) {
      document.documentElement.classList.toggle("dark", value);
      localStorage.setItem("theme", value ? "dark" : "light");
    }
  };

  const toggleTheme = () => {
    applyTheme(!isDark.value);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);
  });

  return {
    isDark,
    toggleTheme,
  };
};
