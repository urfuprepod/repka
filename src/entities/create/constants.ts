import { GridItem } from "@/shared/types";

type CreationForm = { items: GridItem[]; name: string; label: string }[];

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
  },

  {
    name: "time",
    label: "Время медитации (в минутах)",
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
    items: [
      { name: "Лес", value: "forest" },
      { name: "Море", value: "sea" },
      { name: "Ветер", value: "wind" },
      { name: "Лес", value: "forest" },
    ],
  },
  {
    name: "voice",
    label: "Голос",
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
