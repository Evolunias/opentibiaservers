import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-open-tibia');
}

export default function WithScreenshotsArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-open-tibia" />;
}
