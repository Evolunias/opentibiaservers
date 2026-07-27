import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-ot');
}

export default function WithScreenshotsArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-ot" />;
}
