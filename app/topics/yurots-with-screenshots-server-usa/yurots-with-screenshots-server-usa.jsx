import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-usa');
}

export default function YurotsWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-usa" />;
}
