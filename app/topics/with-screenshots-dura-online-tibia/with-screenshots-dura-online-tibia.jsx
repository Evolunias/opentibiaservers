import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-tibia');
}

export default function WithScreenshotsDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-tibia" />;
}
