import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-latin-america');
}

export default function XanteriaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-latin-america" />;
}
