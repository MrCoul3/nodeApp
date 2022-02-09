const nodeEnv = process.env.NODE_ENV;

const developmentDomain = "zab";

export const ISO_DATE_FORMAT = "L";

const upperLevelDomain = window.location.hostname.split(".").pop();

export const UPPER_LEVEL_DOMAIN =
  nodeEnv === "development" ? developmentDomain : upperLevelDomain;

export const APPLICATIONS_ENDPOINT = `http://applications.${UPPER_LEVEL_DOMAIN}/services/apps`;
export const OBJECT_CLASS_ENDPOINT = `http://objects.${UPPER_LEVEL_DOMAIN}/services/objectClass`;
export const ROLE_ENDPOINT = `http://accounts.${UPPER_LEVEL_DOMAIN}/jsonrpc/roles/v1`;
export const OBJECT_ENDPOINT = `http://objects.${UPPER_LEVEL_DOMAIN}/services/object/v2`;
export const PERMISSIONS_ENDPOINT = `http://permissions.${UPPER_LEVEL_DOMAIN}/jsonrpc/permissions`;

export const data = [
  {
    id: "1111",
    name: "group1",
    description: "Группа 1",
    date: "1643621885",
    params: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    },
  },
  {
    id: "2222",
    name: "group2",
    description: "Группа 2",
    date: "1654621885",
    params: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    },
  },
];

export const objectIDsList = [
  {
    id: "o111",
    object_name: "Объект 1",
    object_class: "Класс объекта ",
  },
  {
    id: "2222",
    name: "group2",
    description: "Группа 2",
    date: "1643621885",
    params: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    },
  },
  {
    id: "o3333",
    object_name: "Объект 3",
    object_class: "Класс объекта ",
  },
  {
    id: "o4444",
    object_name: "Объект 4",
    object_class: "Класс объекта ",
  },
];
export const objectIDsList2 = [
  {
    id: "o999",
    object_name: "Объект 9",
    object_class: "Класс объекта ",
  },
  {
    id: "o5555",
    object_name: "Объект 5",
    object_class: "Класс объекта ",
  },
  {
    id: "o4444",
    object_name: "Объект 4",
    object_class: "Класс объекта ",
  },
  {
    id: "o3333",
    object_name: "Объект 3",
    object_class: "Класс объекта ",
  },
];
