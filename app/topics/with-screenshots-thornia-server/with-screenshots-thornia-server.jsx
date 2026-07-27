import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-server');
}

export default function WithScreenshotsThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-server" />;
}
