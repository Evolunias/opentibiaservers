import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-official');
}

export default function WithScreenshotsArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-official" />;
}
