import fs from 'fs';

export const readDirectory = (directoryPath: string): Promise<string[]> => {
  if (!fs.existsSync(directoryPath)) {
    throw new Error("There's no such a directory.");
  }

  return fs.promises.readdir(directoryPath);
};

export const readFile = async (filePath: string): Promise<string> => {
  if (!fs.existsSync(filePath)) {
    throw new Error("There's no such a file.");
  }

  const fileContent = (await fs.promises.readFile(filePath)).toString();

  return fileContent;
};
