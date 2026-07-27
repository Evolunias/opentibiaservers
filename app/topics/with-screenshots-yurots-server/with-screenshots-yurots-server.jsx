import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-server');
}

export default function WithScreenshotsYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-server" />;
}
