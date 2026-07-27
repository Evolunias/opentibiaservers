import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-latin-america');
}

export default function YurotsWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-latin-america" />;
}
