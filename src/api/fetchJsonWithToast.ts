import { showToast, Toast } from '@raycast/api';
import { FetchJsonParams, fetchJson } from 'api/fetchJson';

type Params = FetchJsonParams & {
  error?: Pick<Toast.Options, 'title'> & Partial<Toast.Options>;
  onError?: (reason?: unknown) => void;
  toast: Pick<Toast.Options, 'title'> & Partial<Toast.Options>;
};

export function fetchJsonWithToast<T>({ error, onError, toast: toastOptions, ...params }: Params) {
  return showToast({
    style: Toast.Style.Animated,
    ...toastOptions,
  }).then((toast) => {
    return fetchJson<T>(params)
      .catch((reason) => {
        if (error) {
          showToast({
            style: Toast.Style.Failure,
            ...error,
          });
        }
        onError?.(reason);
        return undefined;
      })
      .finally(() => toast.hide());
  });
}
