import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-login');
}

export default function WithScreenshotsCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-login" />;
}
