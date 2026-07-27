import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-client');
}

export default function WithScreenshotsClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-client" />;
}
