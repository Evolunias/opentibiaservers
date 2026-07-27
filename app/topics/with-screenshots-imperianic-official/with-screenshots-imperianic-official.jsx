import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-official');
}

export default function WithScreenshotsImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-official" />;
}
