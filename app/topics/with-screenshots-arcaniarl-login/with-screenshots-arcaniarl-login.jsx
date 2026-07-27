import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-login');
}

export default function WithScreenshotsArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-login" />;
}
