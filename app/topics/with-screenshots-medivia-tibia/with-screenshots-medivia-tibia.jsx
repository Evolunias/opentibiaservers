import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-tibia');
}

export default function WithScreenshotsMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-tibia" />;
}
