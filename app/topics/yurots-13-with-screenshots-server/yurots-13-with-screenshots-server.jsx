import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-with-screenshots-server');
}

export default function Yurots13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-with-screenshots-server" />;
}
