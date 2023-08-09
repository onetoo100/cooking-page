export const navigatePages = (id: string) => {
  const element: HTMLElement | null = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
