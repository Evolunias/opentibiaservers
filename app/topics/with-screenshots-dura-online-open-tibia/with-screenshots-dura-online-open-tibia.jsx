import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-open-tibia');
}

export default function WithScreenshotsDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-open-tibia" />;
}
