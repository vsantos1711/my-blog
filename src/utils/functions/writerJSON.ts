import fs from "node:fs";

export function writerJSON(textos: any, idioma: any) {
  try {
    fs.writeFileSync(
      `public/repo/${idioma}.json`,
      JSON.stringify(textos, null, 2)
    );
    console.log(`Arquivo ${idioma}.json criado com sucesso.`);
  } catch (error) {
    console.error("Erro ao escrever arquivo JSON:", error);
    throw error;
  }
}
