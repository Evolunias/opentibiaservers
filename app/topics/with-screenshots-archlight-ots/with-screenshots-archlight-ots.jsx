import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-ots');
}

export default function WithScreenshotsArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-ots" />;
}
