import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-tibia');
}

export default function WithScreenshotsMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-tibia" />;
}
