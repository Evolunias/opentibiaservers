import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-official');
}

export default function WithScreenshotsOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-official" />;
}
