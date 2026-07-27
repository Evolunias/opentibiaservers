import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-latin-america');
}

export default function WithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-latin-america" />;
}
