import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-server');
}

export default function WithScreenshotsCanobServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-server" />;
}
