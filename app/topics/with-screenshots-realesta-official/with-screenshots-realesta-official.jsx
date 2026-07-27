import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-official');
}

export default function WithScreenshotsRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-official" />;
}
