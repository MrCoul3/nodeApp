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
