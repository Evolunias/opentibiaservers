import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-website');
}

export default function WithScreenshotsArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-website" />;
}
