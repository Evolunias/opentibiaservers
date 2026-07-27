import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-latin-america');
}

export default function WithScreenshotsOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-latin-america" />;
}
