import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-latin-america');
}

export default function WithScreenshotsClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-latin-america" />;
}
