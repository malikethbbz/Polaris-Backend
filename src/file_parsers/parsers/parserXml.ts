import { XMLParser } from "fast-xml-parser";

export const parseXml = async (file: Express.Multer.File): Promise<Record<string, any>[]> => {
  if (!file.buffer) throw new Error("Archivo vacío");

  const text = file.buffer.toString("utf-8");
  const parser = new XMLParser({ ignoreAttributes: false });
  const json = parser.parse(text);

  const rootKey = Object.keys(json)[0];
  const items = json[rootKey]?.item;
  if (!items) return [];

  return Array.isArray(items) ? items : [items];
};
