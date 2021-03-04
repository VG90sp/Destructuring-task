export default function getSpecialAttack(obj) {
  const specialAttacks = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const item of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    specialAttacks.push({
      id,
      name,
      icon,
      description,
    });
  }
  return specialAttacks;
}
