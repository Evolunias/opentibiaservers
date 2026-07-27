import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-official');
}

export default function WithScreenshotsKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-official" />;
}
