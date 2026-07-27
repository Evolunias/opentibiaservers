import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-client');
}

export default function WithScreenshotsNilotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-client" />;
}
