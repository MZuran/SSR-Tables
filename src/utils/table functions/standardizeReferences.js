export default function standardizeReferences(data) {
  const classTable = data.ClassTable;

  if (!classTable) return data;

  const updates = {
    Name: `${classTable}Name`,
    Description: `${classTable}Desc`,
    "Menu Class": classTable,
    "Standing Map Anims": `${classTable}SMS`,
    "Battle Anim": `${classTable}_Anim`
  };

  return {
    ...data,
    ...updates
  };
}