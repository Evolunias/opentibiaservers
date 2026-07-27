import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-official');
}

export default function WithScreenshotsClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-official" />;
}
