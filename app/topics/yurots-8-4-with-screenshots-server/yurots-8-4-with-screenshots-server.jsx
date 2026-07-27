import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-with-screenshots-server');
}

export default function Yurots84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-with-screenshots-server" />;
}
