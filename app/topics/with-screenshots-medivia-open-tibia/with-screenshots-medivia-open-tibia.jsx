import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-open-tibia');
}

export default function WithScreenshotsMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-open-tibia" />;
}
