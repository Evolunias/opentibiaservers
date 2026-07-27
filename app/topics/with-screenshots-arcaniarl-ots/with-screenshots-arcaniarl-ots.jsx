import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-ots');
}

export default function WithScreenshotsArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-ots" />;
}
