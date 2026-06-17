export interface PageHeader {
  /** ヘッダーバーの見出し */
  title: string
  /** 見出しの下に出る補足（任意） */
  subtitle?: string
}

/**
 * 画面ヘッダー（タイトル/サブタイトル）の共有 state。
 *
 * ページ本体（components/pages/*）と外枠（layouts/default.vue）は
 * コンポーネントツリー上「兄弟」なので props で渡せない。
 * そこで useState による共有 state を「チャンネル」にする。
 *
 * - セット: ページ本体が setup で `usePageHeader({ title, subtitle })` を呼ぶ
 * - 読み取り: 外枠の Container = `layouts/default.vue` が `usePageHeader()` で読み、
 *   `<LayoutsHeader>` に props で渡す
 */
export const usePageHeader = (value?: PageHeader) => {
  const header = useState<PageHeader>('page-header', () => ({ title: '' }))

  if (value) {
    header.value = value
  }

  return header
}
