import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-login');
}

export default function WithScreenshotsThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-login" />;
}
