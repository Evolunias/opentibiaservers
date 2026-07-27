import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-mexico');
}

export default function YurotsWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-mexico" />;
}
