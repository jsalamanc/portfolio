export const calculateReadTime = (text: string) => {
  // Set an average reading speed in words per minute (WPM)
  const velocidadLectura = 200; // You can adjust this value as needed

  // Calculate the number of words in the text
  const palabras = text.split(/\s+/).length;

  // Calculate the reading time in minutes
  const readTime = palabras / velocidadLectura;

  return readTime.toFixed(2);
};
