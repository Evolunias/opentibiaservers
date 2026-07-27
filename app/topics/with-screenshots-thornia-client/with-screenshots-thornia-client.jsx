import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-client');
}

export default function WithScreenshotsThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-client" />;
}
