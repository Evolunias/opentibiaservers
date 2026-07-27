import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-server');
}

export default function WithScreenshotsClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-server" />;
}
