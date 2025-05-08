export const creationForm: CreationForm = [
  {
    name: "description",
    items: [
      { name: "Расслабление", value: "chill" },
      { name: "Прилив сил", value: "hardworking" },
      { name: "Успокоение", value: "rest" },
      { name: "Концентрация", value: "concentration" },
    ],
    label: "Описание ситуации",
    itemsInLine: 2,
  },

  {
    name: "time",
    label: "Время медитации (в минутах)",
    itemsInLine: 2,
    items: [
      {
        name: "3",
        value: "3",
      },
      {
        name: "5",
        value: "5",
      },
      {
        name: "10",
        value: "10",
      },
      {
        name: "15",
        value: "15",
      },
    ],
  },
  {
    name: "soundtrack",
    label: "Фоновый шум",
    itemsInLine: 2,
    items: [
      { name: "Лес", value: "forest" },
      { name: "Море", value: "sea" },
      { name: "Ветер", value: "wind" },
      { name: "Горы", value: "mountain" },
    ],
  },
  {
    name: "voice",
    label: "Голос",
    itemsInLine: 2,
    items: [
      { name: "Мужской 1", value: "man1" },
      { name: "Мужской 2", value: "man2" },
      { name: "Женский 1", value: "woman1" },
      { name: "Женский 2", value: "woman2" },
      { name: "Свой", value: "mine" },
      { name: "Любимого", value: "love" },
    ],
  },
];
