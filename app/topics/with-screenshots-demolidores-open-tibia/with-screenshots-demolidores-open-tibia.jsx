import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-open-tibia');
}

export default function WithScreenshotsDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-open-tibia" />;
}
