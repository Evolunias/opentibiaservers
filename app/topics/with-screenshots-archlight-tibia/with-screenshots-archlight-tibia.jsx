import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-tibia');
}

export default function WithScreenshotsArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-tibia" />;
}
