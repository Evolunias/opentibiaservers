import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-north-america');
}

export default function YurotsWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-north-america" />;
}
