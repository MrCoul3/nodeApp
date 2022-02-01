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
        description: "группа 1",
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
        description: "группа 2",
        date: "1654621885",
        params: {
            key1: "value1",
            key2: "value2",
            key3: "value3",
        },
    },
];

export const objectIDsList = ['o111', '0222', '2222', 'o333'];
export const objectIDsList2 = ['o999', 'o5555', 'o4444', 'o3333'];
