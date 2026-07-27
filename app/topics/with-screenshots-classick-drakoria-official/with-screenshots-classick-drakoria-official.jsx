import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-official');
}

export default function WithScreenshotsClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-official" />;
}
