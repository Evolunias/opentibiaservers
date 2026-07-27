import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-with-screenshots-server');
}

export default function Yurots71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-with-screenshots-server" />;
}
