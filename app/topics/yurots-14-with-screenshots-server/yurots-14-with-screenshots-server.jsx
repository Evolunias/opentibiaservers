import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-with-screenshots-server');
}

export default function Yurots14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-with-screenshots-server" />;
}
