interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_DEV: boolean;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_SSO_KEY: string;
  readonly VITE_APP_CORE_URL: string;
  readonly VITE_APP_SSO_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
