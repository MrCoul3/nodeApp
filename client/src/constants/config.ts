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

const DOMAIN = "develop-opo";
// export const GROUPS_APP_ENDPOINT = `http://vms-groups.${UPPER_LEVEL_DOMAIN}/jsonrpc/service`;
export const GROUPS_APP_ENDPOINT = `http://vms-groups.${DOMAIN}/jsonrpc/service`;
export const OBJECTS_CLASSES = `http://objects.${DOMAIN}/services/objectClass`;
export const OBJECTS = `http://objects.${DOMAIN}/services/object`;


// getObjectClassCount
// getObjectClass
// getObjectClassIds

// 462MLC5NMZF8gXD4tQrRfR ID МЕДИАКАНАЛЫ
//getObjects

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
  {
    id: "3333",
    name: "group3",
    description: "Группа 3",
    date: "1643621885",
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
    id: "3333",
    name: "group3",
    description: "Группа 3",
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
    id: "o42341111",
    object_name: "Объект 92",
    object_class: "Класс объекта ",
  },
  {
    id: "o5555",
    object_name: "Объект 5",
    object_class: "Класс объекта ",
  },
  {
    id: "3333",
    name: "group3",
    description: "Группа 3",
    date: "1643621885",
    params: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    },
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

export const objectIDsList3 = [
  {
    id: "o3452",
    object_name: "Объект 39",
    object_class: "Класс объекта ",
  },
  {
    id: "o5555345",
    object_name: "Объект 53",
    object_class: "Класс объекта ",
  },
  {
    id: "o4412312344",
    object_name: "Объект 43",
    object_class: "Класс объекта ",
  },
  {
    id: "o3321233",
    object_name: "Объект 23",
    object_class: "Класс объекта ",
  },

];
