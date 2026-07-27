import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-france');
}

export default function WithScreenshotsSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-france" />;
}
