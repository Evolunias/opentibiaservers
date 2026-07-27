import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-official');
}

export default function WithScreenshotsArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-official" />;
}
