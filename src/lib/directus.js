import { createDirectus, rest, authentication } from '@directus/sdk';
import { DIRECTUS, STORAGE_KEYS } from '@/core/config/global';
import { getItem, setItem } from '@/utils/storage';

class LocalStorageAuth {
  get() {
    return getItem(STORAGE_KEYS.TOKEN_NAME);
  }

  set(data) {
    return setItem(STORAGE_KEYS.TOKEN_NAME, data);
  }
}

const directus = createDirectus(DIRECTUS.BASE_URL)
  .with(authentication('json', { storage: new LocalStorageAuth() }))
  .with(rest());

export default directus;