import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-official');
}

export default function WithScreenshotsRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-official" />;
}
