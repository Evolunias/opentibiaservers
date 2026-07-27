import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-client');
}

export default function WithScreenshotsCanobClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-client" />;
}
