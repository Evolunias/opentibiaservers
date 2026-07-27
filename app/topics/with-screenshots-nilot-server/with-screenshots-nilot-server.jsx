import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-server');
}

export default function WithScreenshotsNilotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-server" />;
}
