import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-argentina');
}

export default function YurotsWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-argentina" />;
}
