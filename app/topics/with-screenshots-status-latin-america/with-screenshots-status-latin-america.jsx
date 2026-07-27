import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-latin-america');
}

export default function WithScreenshotsStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-latin-america" />;
}
