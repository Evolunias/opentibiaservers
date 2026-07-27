import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-server');
}

export default function WithScreenshotsOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-server" />;
}
