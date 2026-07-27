import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-official');
}

export default function WithScreenshotsNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-official" />;
}
