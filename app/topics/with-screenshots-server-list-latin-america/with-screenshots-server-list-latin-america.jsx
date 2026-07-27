import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-latin-america');
}

export default function WithScreenshotsServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-latin-america" />;
}
